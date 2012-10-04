/**
 * This panel will overlay when the new patient button is
 * pressed. This is a form that gets user name and shows
  */
Ext.define("Screener.view.NewPatient", {
    requires: ['Ext.field.Text', 'Ext.field.Number'],
    extend: 'Ext.form.Panel',
    xtype: 'newPatient',
    id: 'newPatient',
    config: {
        centered: true,
        modal: true,
        hideOnMaskTap: true,
        hidden: true,
        // Set the width and height of the panel
        width: 500,
        height: 310,

        items: [{
            xtype: 'textfield',
            id: 'givenName',
            name: 'givenname',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.giv_name')
        }, {
            xtype: 'textfield',
            id: 'familyName',
            name: 'familyname',
            label: Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.fam_name')
        }, 
        {
            xtype  : 'container',
            id: 'ageDateOfBirth',
            layout : {
                type  : 'hbox'
            },
            items : [
            {
                xtype: 'textfield',
                id: 'age',
                name: 'age',
                labelWidth: 70,
                label: "Age"
            },
            {
                xtype: 'textfield',
                id: 'dateOfBirth',
                name: 'dateOfBirth',
                labelWidth: 70,
                label: "DateOfBirth"
            }
            ]
        },
        {
            xtype  : 'container',
            id: 'sexRadioGroup',
            layout : {
                type  : 'hbox',
                align : 'strech'
            },
            items  : [
            {
                xtype : 'radiofield',
                label : Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.male'),
                value: 'M',
                name  : 'choice',
                labelWidth: 70,
                flex  : 1
            },
            {
                xtype : 'radiofield',
                label : Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.female'),
                value: 'F',
                name  : 'choice',
                labelWidth: 90,
                flex  : 1
            },
            {
                xtype : 'radiofield',
                label : Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.other'),
                value: 'O',
                name  : 'choice',
                labelWidth: 70,
                flex  : 1
            }
            ]
        },{
            xtype: 'button',
            id: 'savePatientButton',
            text: Ext.i18n.appBundle.getMsg('RaxaEmrScreener.view.NewPatient.save_p'),
            ui: 'action'
        }]
    },
    saveForm: function () {
        return this.getValues();
    }
});