from django.contrib import admin

# Register your models here.
from finance.models import Expense, Earning

admin.site.register(Expense)
admin.site.register(Earning)
