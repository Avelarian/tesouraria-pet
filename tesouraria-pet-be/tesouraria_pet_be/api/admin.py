from django.contrib import admin
from .models import Petiano, Tutor, Evento, HistoricoPetiano, HistoricoEvento, Caixinha, Cofre, ContaBancaria
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from django.contrib.auth.models import User

# Register your models here.


class PetianoInline(admin.StackedInline):
    model = Petiano
    can_delete = False
    verbose_name_plural = 'petianos'


class UserAdmin(BaseUserAdmin):
    inlines = (PetianoInline,)


admin.site.unregister(User)
admin.site.register(User, UserAdmin)
admin.site.register(Petiano)
admin.site.register(Tutor)
admin.site.register(Evento)
admin.site.register(HistoricoPetiano)
admin.site.register(HistoricoEvento)
admin.site.register(Caixinha)
admin.site.register(Cofre)
admin.site.register(ContaBancaria)
