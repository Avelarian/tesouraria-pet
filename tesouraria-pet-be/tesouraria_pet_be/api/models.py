from django.db import models
from tesouraria_pet_be.api import constants

# Create your models here.

class Petiano(models.Model):
    name                = models.CharField(max_length=256) #max_length = required!!
    email               = models.CharField(max_length=256) 
    mNumber             = models.CharField(max_length=11)
    dt_entryCourse      = models.DateField()
    dt_leavingCourse    = models.DateField()
    cpfNumber           = models.CharField(max_length=11)
    rgNumber            = models.CharField(max_length=10)
    telFix              = models.CharField(max_length=10, null=True)
    celNumber           = models.CharField(max_length=11)
    address             = models.TextField()
    dt_entryPet         = models.DateField()
    dt_leavePet         = models.DateField()
    functionPet         = models.CharField(max_length=16, choices=constants.FUNCTION, default="T")
    debt                = models.FloatField(default=0.00)
    active              = models.BooleanField(default=True)

class Tutor(models.Model):
    name        = models.CharField(max_length=256)
    email       = models.CharField(max_length=256)
    cpfNumber   = models.CharField(max_length=11)
    rgNumber    = models.CharField(max_length=10)
    telFix      = models.CharField(max_length=10, null=True)
    celNumber   = models.CharField(max_length=11)
    address     = models.TextField()
    dt_entryPet = models.DateField()
    dt_leavePet = models.DateField()
    functionPet = models.CharField(max_length=10 ,default="Tutor", editable=False)
    active      = models.BooleanField(default=True)

class Evento(models.Model):
    name        = models.CharField(max_length=256)
    edition     = models.CharField(max_length=3)
    dt_start    = models.DateField()
    dt_finish   = models.DateField()
    typePet     = models.CharField(max_length=10 ,default="Tutor", editable=False)
    cashier     = models.FloatField(default=0.00)
    active      = models.BooleanField(default=True)

class Caixinha(models.Model):
    value = models.FloatField(default=0.00)

class Cofre(models.Model):
    value = models.FloatField(default=0.00)

class ContaBancaria(models.Model):
    value = models.FloatField(default=0.00)

class HistoricoPetiano(models.Model):
    petiano     = models.ForeignKey(
        Petiano, 
        on_delete=models.DO_NOTHING)
    dt_created  = models.DateField()
    value       = models.FloatField(default=0.00)
    main_reason = models.CharField(max_length=30)
    description = models.TextField(null=True)
    from_place  = models.CharField(max_length=16, choices=constants.PLACE, default="CA")
    to_place    = models.CharField(max_length=16, choices=constants.PLACE, default="CA")

class HistoricoEvento(models.Model):
    evento     = models.ForeignKey(
        Evento, 
        on_delete=models.DO_NOTHING)
    petiano     = models.ForeignKey(
        Petiano, 
        on_delete=models.DO_NOTHING)
    dt_created  = models.DateField()
    value       = models.FloatField(default=0.00)
    main_reason = models.CharField(max_length=30)
    description = models.TextField(null=True)
    from_place  = models.CharField(max_length=16, choices=constants.PLACE, default="CA")
    to_place    = models.CharField(max_length=16, choices=constants.PLACE, default="CA") 