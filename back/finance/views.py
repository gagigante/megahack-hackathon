# Create your views here.
from rest_framework import viewsets
from rest_framework.response import Response

from finance.models import Expense, Earning
from finance.serializers import ExpenseSerializer, EarningSerializer
from login.models import User


class ExpenseViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Expense.objects.all().order_by('-date_add')
    serializer_class = ExpenseSerializer

    # permission_classes = [permissions.IsAuthenticated]
    def create(self, request, *args, **kwargs):
        data = request.data
        user = User.objects.get(pk=data['id'])
        obj = Expense(
            user=user,
            description=data['description'],
            value=data['value'],
            date_receive=Earning.parseDate(data['date_receive']),
            repeat=data['repeat'],
            category=data['category'],
        )
        return Response({'status': True})

    def retrieve(self, request, *args, **kwargs):
        print(self.request.query_params)


class EarningViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Earning.objects.all().order_by('-date_add')
    serializer_class = EarningSerializer

    # permission_classes = [permissions.IsAuthenticated]
    def create(self, request, *args, **kwargs):
        data = request.data
        user = User.objects.get(pk=data['id'])
        obj = Earning(
            user=user,
            description=data['description'],
            value=data['value'],
            date_receive=Earning.parseDate(data['date_receive']),
            repeat=data['repeat'],
            category=Earning.CATEGORIES[int(data['category'])],
        )
        obj.save()
        return Response({'status': EarningSerializer(obj).data})

    def list(self, request, *args, **kwargs):
        data = request.query_params
        user = User.objects.get(pk=data['id'])
        obj = self.queryset.filter(user=user)
        listObj = []
        for i in obj:
            listObj.append(EarningSerializer(i).data)
        return Response(listObj)

    def retrieve(self, request, *args, **kwargs):
        print(request.content_type)
        return Response({"status": True})
