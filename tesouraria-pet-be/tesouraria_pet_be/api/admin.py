from django.contrib import admin
from .models import Petiano, Tutor, Evento, HistoricoPetiano, HistoricoEvento, Caixinha, Cofre, ContaBancaria

# Register your models here.

admin.site.register(Petiano)
admin.site.register(Tutor)
admin.site.register(Evento)
admin.site.register(HistoricoPetiano)
admin.site.register(HistoricoEvento)
admin.site.register(Caixinha)
admin.site.register(Cofre)
admin.site.register(ContaBancaria)
