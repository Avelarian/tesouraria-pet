from rolepermissions.roles import AbstractUserRole


class Treasurer(AbstractUserRole):
    available_permissions = {
        'view_caixinha': 'True',
        'view_cofre': 'True',
        'view_conta_bancaria': 'True',
        'view_evento': 'True',
        'view_historico_evento': 'True',
        'view_historico_petiano': 'True',
        'view_petiano': 'True',
        'view_tutor': 'True',
        'change_user': 'True',
        'view_user': 'True',
    }


class Others(AbstractUserRole):
    available_permissions = {
        'view_caixinha': 'True',
        'view_cofre': 'True',
        'view_conta_bancaria': 'True',
        'view_evento': 'True',
        'view_historico_evento': 'True',
        'view_historico_petiano': 'True',
        'view_petiano': 'True',
        'view_tutor': 'True',
        'add_caixinha': 'True',
        'add_cofre': 'True',
        'add_conta_bancaria': 'True',
        'add_evento': 'True',
        'add_historico_evento': 'True',
        'add_historico_petiano': 'True',
        'add_petiano': 'True',
        'add_tutor': 'True',
        'change_caixinha': 'True',
        'change_cofre': 'True',
        'change_conta_bancaria': 'True',
        'change_evento': 'True',
        'change_historico_evento': 'True',
        'change_historico_petiano': 'True',
        'change_petiano': 'True',
        'change_tutor': 'True',
        'add_user': 'True',
        'change_user': 'True',
        'view_user': 'True',
    }

