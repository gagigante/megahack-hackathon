from rest_framework import serializers

from finance.models import Expense, Earning


class ExpenseSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Expense
        fields = ['description']


class EarningSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Earning
        fields = ['description', 'value', 'date_receive', 'repeat', 'date_add', 'category']
