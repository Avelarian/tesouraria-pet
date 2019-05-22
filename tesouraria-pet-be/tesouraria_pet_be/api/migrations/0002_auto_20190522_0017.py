# Generated by Django 2.2 on 2019-05-22 00:17

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='historicoevento',
            name='from_place',
            field=models.CharField(choices=[('Próprio Bolso', 'Próprio Bolso'), ('Caixinha', 'Caixinha'), ('Cofre', 'Cofre'), ('Conta Bancária', 'Conta Bancária')], default='Caixinha', max_length=16),
        ),
        migrations.AlterField(
            model_name='historicoevento',
            name='to_place',
            field=models.CharField(choices=[('Próprio Bolso', 'Próprio Bolso'), ('Caixinha', 'Caixinha'), ('Cofre', 'Cofre'), ('Conta Bancária', 'Conta Bancária')], default='Caixinha', max_length=16),
        ),
        migrations.AlterField(
            model_name='historicopetiano',
            name='from_place',
            field=models.CharField(choices=[('Próprio Bolso', 'Próprio Bolso'), ('Caixinha', 'Caixinha'), ('Cofre', 'Cofre'), ('Conta Bancária', 'Conta Bancária')], default='Caixinha', max_length=16),
        ),
        migrations.AlterField(
            model_name='historicopetiano',
            name='main_reason',
            field=models.CharField(choices=[('Reembolso', 'Reembolso'), ('Pagamento de dívida', 'Pagamento de dívida'), ('Empréstimo pessoal', 'Empréstimo pessoal'), ('Impressão', 'Impressão'), ('Mensalidade', 'Mensalidade')], default='Impressão', max_length=20),
        ),
        migrations.AlterField(
            model_name='historicopetiano',
            name='to_place',
            field=models.CharField(choices=[('Próprio Bolso', 'Próprio Bolso'), ('Caixinha', 'Caixinha'), ('Cofre', 'Cofre'), ('Conta Bancária', 'Conta Bancária')], default='Caixinha', max_length=16),
        ),
        migrations.AlterField(
            model_name='petiano',
            name='functionPet',
            field=models.CharField(choices=[('Tesouraria', 'Tesouraria'), ('Relações Humanas', 'Relações Humanas'), ('Organização', 'Organização'), ('Divulgação', 'Divulgação'), ('Informática', 'Informática')], default='Tesouraria', max_length=16),
        ),
    ]
