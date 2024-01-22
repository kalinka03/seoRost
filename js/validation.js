function Validation(formId, fields) {
    const formIdSelector = '#' + formId;
    const ruleService = window.ruleService || new RuleService();
    const validation = new JustValidate(formIdSelector);

    fields.forEach((field) => {
        let rule;
        try {
            rule = ruleService[field]();
        } catch (e) {
            console.error(`Validation: rule "${field}" doesn't exist in rules`);
            throw new Error(e);
        }

        try {
            validation.addField(`[name="${field}"]`, rule);
        } catch (e) {
            console.error(
                `Validation: name="${field}" selector not found! Please check the field selector.`
            );
            throw new Error(e);
        }
    });

    validation.onSuccess((event) => {
        window.dispatchEvent(new CustomEvent('form_success', { detail: { event } }));
    });
}
function RuleService() {

    function name() {
        return [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
        ];
    }

    function phone() {
        return [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
            {
                rule: 'minLength',
                value: 7,
                errorMessage: 'Дані некоректні',
            },
        ];
    }

    function email() {
        return [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
            {
                rule: 'email',
                errorMessage: 'Дані некоректні',
            },
        ];
    }

    function siteName() {
        return [
            {
                rule: 'required',
                errorMessage: 'Дані некоректні',
            },
        ];
    }

    return {
        name,
        phone,
        email,
        siteName
    };
}

const ruleService = RuleService();
function makeValidation(formId, fields) {
    return new Validation(formId, fields);
}

