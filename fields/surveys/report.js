var surveyReport = {
    mandatories : [
        {"parent_fields":["survey_site_id"]}
    ],
    allfields : [
        'name',
        'phone_area',
        'phone',
        'address',
        'city',
        'end_of_contract',
        'business_field',
        'status',
        'alias',
        'user_id',
        'sale_id',
        'siup',
        'npwp',
        'clientcategory',
        'isffr',
        'isoryza',
        'active',
        'prospectdate'
    ],
    numberfields : []
}
module.exports = {
    mandatories:surveyReport.mandatories,
    allfields:surveyReport.allfields,
    numberfields:surveyReport.numberfields
}