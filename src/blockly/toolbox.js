export default {
  kind: "categoryToolbox",
  contents: [
    {
      kind: "category",
      name: "Hooks",
      colour: "#5CA699",
      contents: [
        {
          kind: "block",
          type: "on_new_log",
        },
        {
          kind: "block",
          type: "on_file_event",
        },
        {
          kind: "block",
          type: "on_disk_usage_update",
        },
        {
          kind: "block",
          type: "on_cpu_usage_update",
        },
        {
          kind: "block",
          type: "on_memory_usage_update",
        },
      ],
    },
    {
      kind: "category",
      name: "Utilities",
      colour: "#6707b4",
      contents: [
        {
          kind: "block",
          type: "dump_output",
        },
        {
          kind: "block",
          type: "script_runner",
        },
        {
          kind: "block",
          type: "report_issue",
        },
        {
          kind: "block",
          type: "send_notification",
        },
        {
          kind: "block",
          type: "search_regex_pattern",
        },
        {
          kind: "block",
          type: "fetch_regex_named_group",
        },
        {
          kind: "block",
          type: "join_with_separator",
        },
      ],
    },
    {
      kind: "category",
      name: "Types",
      colour: "#2272e7",
      contents: [
        {
          kind: "block",
          type: "text",
        },
        {
          kind: "block",
          type: "file_event_type",
        },
        {
          kind: "block",
          type: "syslog_facility_level",
        },
        {
          kind: "block",
          type: "syslog_severity_level",
        },
      ],
    },
    {
      kind: "category",
      name: "Variables",
      categorystyle: "variable_category",
      custom: "VARIABLE",
    },
    {
      kind: "category",
      name: "Core",
      colour: 230,
      contents: [
        {
          kind: "category",
          name: "Control",
          categorystyle: "logic_category",
          contents: [
            { kind: "block", type: "controls_if" },
            {
              kind: "block",
              type: "controls_if",
              extraState: { hasElse: "true" },
            },
            {
              kind: "block",
              type: "controls_if",
              extraState: { hasElse: "true", elseIfCount: 1 },
            },
          ],
        },
        {
          kind: "category",
          name: "Logic",
          categorystyle: "logic_category",
          contents: [
            { kind: "block", type: "logic_compare" },
            {
              kind: "block",
              type: "logic_operation",
            },
            { kind: "block", type: "logic_negate" },
            { kind: "block", type: "logic_boolean" },
            {
              kind: "block",
              type: "logic_null",
            },
            { kind: "block", type: "logic_ternary" },
          ],
        },
        {
          kind: "category",
          name: "Math",
          categorystyle: "math_category",
          contents: [
            { kind: "block", type: "math_number", fields: { NUM: 123 } },
            {
              kind: "block",
              type: "math_arithmetic",
              fields: { OP: "ADD" },
            },
            { kind: "block", type: "math_single", fields: { OP: "ROOT" } },
            {
              kind: "block",
              type: "math_trig",
              fields: { OP: "SIN" },
            },
            {
              kind: "block",
              type: "math_constant",
              fields: { CONSTANT: "PI" },
            },
            {
              kind: "block",
              type: "math_number_property",
              extraState: '<mutation divisor_input="false"></mutation>',
              fields: { PROPERTY: "EVEN" },
            },
            { kind: "block", type: "math_round", fields: { OP: "ROUND" } },
            {
              kind: "block",
              type: "math_on_list",
              extraState: '<mutation op="SUM"></mutation>',
              fields: { OP: "SUM" },
            },
            { kind: "block", type: "math_modulo" },
            {
              kind: "block",
              type: "math_constrain",
              inputs: {
                LOW: { block: { type: "math_number", fields: { NUM: 1 } } },
                HIGH: { block: { type: "math_number", fields: { NUM: 100 } } },
              },
            },
          ],
        },
        {
          kind: "category",
          name: "Loops",
          categorystyle: "loop_category",
          contents: [
            {
              kind: "block",
              type: "controls_repeat_ext",
              inputs: {
                TIMES: { block: { type: "math_number", fields: { NUM: 10 } } },
              },
            },
            { kind: "block", type: "controls_whileUntil" },
            {
              kind: "block",
              type: "controls_for",
              fields: { VAR: "i" },
              inputs: {
                FROM: { block: { type: "math_number", fields: { NUM: 1 } } },
                TO: { block: { type: "math_number", fields: { NUM: 10 } } },
                BY: { block: { type: "math_number", fields: { NUM: 1 } } },
              },
            },
            { kind: "block", type: "controls_forEach" },
            { kind: "block", type: "controls_flow_statements" },
          ],
        },
        {
          kind: "category",
          name: "Lists",
          categorystyle: "list_category",
          contents: [
            { kind: "block", type: "lists_create_empty" },
            {
              kind: "block",
              type: "lists_create_with",
              extraState: { itemCount: 3 },
            },
            {
              kind: "block",
              type: "lists_repeat",
              inputs: {
                NUM: { block: { type: "math_number", fields: { NUM: 5 } } },
              },
            },
            { kind: "block", type: "lists_length" },
            { kind: "block", type: "lists_isEmpty" },
            {
              kind: "block",
              type: "lists_indexOf",
              fields: { END: "FIRST" },
            },
            {
              kind: "block",
              type: "lists_getIndex",
              fields: { MODE: "GET", WHERE: "FROM_START" },
            },
            {
              kind: "block",
              type: "lists_setIndex",
              fields: { MODE: "SET", WHERE: "FROM_START" },
            },
          ],
        },
        {
          kind: "category",
          name: "Functions",
          categorystyle: "procedure_category",
          custom: "PROCEDURE",
        },
      ],
    },
  ],
};
