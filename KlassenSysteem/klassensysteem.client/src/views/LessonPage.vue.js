export default await (async () => {
    const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
    const __VLS_fnComponent = (await import('vue')).defineComponent({});
    ;
    let __VLS_functionalComponentProps;
    function __VLS_template() {
        const __VLS_ctx = {};
        const __VLS_localComponents = {
            ...{},
            ...{},
            ...__VLS_ctx,
        };
        let __VLS_components;
        const __VLS_localDirectives = {
            ...{},
            ...__VLS_ctx,
        };
        let __VLS_directives;
        let __VLS_styleScopedClasses;
        // CSS variable injection 
        // CSS variable injection end 
        let __VLS_resolvedLocalAndGlobalComponents;
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lessons-page") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.addLesson) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("lessonName"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ type: ("text"), id: ("lessonName"), value: ((__VLS_ctx.newLesson.name)), placeholder: ("Voer een lesnaam in"), required: (true), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("form-group") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.label, __VLS_intrinsicElements.label)({ for: ("lessonDescription"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.textarea, __VLS_intrinsicElements.textarea)({ id: ("lessonDescription"), value: ((__VLS_ctx.newLesson.description)), placeholder: ("Voer een beschrijving in"), required: (true), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h2, __VLS_intrinsicElements.h2)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({});
        for (const [lesson, index] of __VLS_getVForSourceType((__VLS_ctx.lessons))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((index)), });
            __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
            (lesson.name);
            (lesson.description);
        }
        __VLS_styleScopedClasses['lessons-page'];
        __VLS_styleScopedClasses['form-group'];
        __VLS_styleScopedClasses['form-group'];
        var __VLS_slots;
        var __VLS_inheritedAttrs;
        const __VLS_refs = {};
        var $refs;
        return {
            slots: __VLS_slots,
            refs: $refs,
            attrs: {},
        };
    }
    ;
    const __VLS_self = (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        data() {
            return {
                newLesson: {
                    name: '',
                    description: '',
                },
                lessons: [],
            };
        },
        methods: {
            addLesson() {
                if (this.newLesson.name && this.newLesson.description) {
                    this.lessons.push({ ...this.newLesson });
                    this.newLesson.name = '';
                    this.newLesson.description = '';
                }
            },
        },
    });
    return (await import('vue')).defineComponent({
        setup() {
            return {};
        },
        data() {
            return {
                newLesson: {
                    name: '',
                    description: '',
                },
                lessons: [],
            };
        },
        methods: {
            addLesson() {
                if (this.newLesson.name && this.newLesson.description) {
                    this.lessons.push({ ...this.newLesson });
                    this.newLesson.name = '';
                    this.newLesson.description = '';
                }
            },
        },
    });
})();
;
//# sourceMappingURL=lessons.vue.js.map