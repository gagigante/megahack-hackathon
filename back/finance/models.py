import dateutil.parser
from django.db import models
from django.utils import timezone
from django.utils.translation import gettext_lazy as _

# Create your models here.
from login.models import User


class AbstractFinance(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    description = models.CharField(
        _('description'),
        max_length=150,
        unique=True,
        help_text=_('Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.'),
    )
    value = models.DecimalField(max_digits=10, decimal_places=2)
    date_receive = models.DateTimeField(_('date_receive'))
    repeat = models.CharField(
        _('repeat'),
        max_length=150,
    )
    date_add = models.DateTimeField(_('date joined'), default=timezone.now)

    @staticmethod
    def parseDate(date_string):
        return dateutil.parser.parse(date_string)

    def __str__(self):
        return self.user.username + self.description


class Earning(AbstractFinance):
    investments = 'in'
    salary = 'sl'
    loans = 'lo'
    other = 'oth'
    CATEGORIES = (
        (investments, 'Investments'),
        (salary, 'Salary'),
        (loans, 'Loans'),
        (other, 'Other'),
    )
    category = models.CharField(
        max_length=10,
        choices=CATEGORIES,
        default=other,
    )


class Expense(AbstractFinance):
    bars = 'br'
    clothing = 'cl'
    debts = 'db'
    education = 'edu'
    other = 'oth'
    CATEGORIES = (
        (bars, 'Bars'),
        (clothing, 'Clothing'),
        (debts, 'Debts'),
        (other, 'Other'),
    )
    category = models.CharField(
        max_length=10,
        choices=CATEGORIES,
        default=other,
    )
