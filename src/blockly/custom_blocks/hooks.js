import Blockly from "blockly";
import "blockly/javascript";

Blockly.Blocks["on_new_log"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA699",
      message0: "On New Log %1 %2",
      args0: [
        {
          type: "field_variable",
          name: "LOG_ID",
          variable: "log_id",
        },
        {
          type: "field_variable",
          name: "LOG_CONTENT",
          variable: "log_content",
        },
      ],
      message1: "From Server %1 %2",
      args1: [
        {
          type: "field_variable",
          name: "SERVER_ID",
          variable: "server_id",
        },
        {
          type: "field_variable",
          name: "SERVER_HOSTNAME",
          variable: "server_hostname",
        },
      ],
      message2: "Of type %1 %2",
      args2: [
        {
          type: "field_variable",
          name: "FACILITY_LEVEL",
          variable: "facility_level",
        },
        {
          type: "field_variable",
          name: "SEVERITY_LEVEL",
          variable: "severity_level",
        },
      ],
      message3: "%1",
      args3: [
        {
          type: "input_statement",
          name: "MAIN",
        },
      ],
    });
  },
};

Blockly.Blocks["on_file_event"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA699",
      message0: "On File %1",
      args0: [
        {
          type: "field_variable",
          name: "EVENT",
          variable: "event",
        },
      ],
      message1: "For %1",
      args1: [
        {
          type: "field_variable",
          name: "FILE_NAME",
          variable: "file_name",
        },
      ],
      message2: "On Server %1 %2",
      args2: [
        {
          type: "field_variable",
          name: "SERVER_ID",
          variable: "server_id",
        },
        {
          type: "field_variable",
          name: "SERVER_HOSTNAME",
          variable: "server_hostname",
        },
      ],
      message3: "%1",
      args3: [
        {
          type: "input_statement",
          name: "MAIN",
        },
      ],
    });
  },
};

Blockly.Blocks["on_disk_usage_update"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA699",
      message0: "On %1% on %2",
      args0: [
        {
          type: "field_variable",
          name: "USAGE_PERCENT",
          variable: "usage_percent",
        },
        {
          type: "field_variable",
          name: "DISK",
          variable: "disk",
        },
      ],
      message1: "On Server %1 %2",
      args1: [
        {
          type: "field_variable",
          name: "SERVER_ID",
          variable: "server_id",
        },
        {
          type: "field_variable",
          name: "SERVER_HOSTNAME",
          variable: "server_hostname",
        },
      ],
      message2: "Info %1 %2 %3",
      args2: [
        {
          type: "field_variable",
          name: "TOTAL_DISK_GB",
          variable: "total_disk_gb",
        },
        {
          type: "field_variable",
          name: "FREE_DISK_GB",
          variable: "free_disk_gb",
        },
        {
          type: "field_variable",
          name: "USED_DISK_GB",
          variable: "used_disk_gb",
        },
      ],
      message3: "%1",
      args3: [
        {
          type: "input_statement",
          name: "MAIN",
        },
      ],
    });
  },
};

Blockly.Blocks["on_memory_usage_update"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA699",
      message0: "On %1%",
      args0: [
        {
          type: "field_variable",
          name: "MEMORY_USAGE_PERCENT",
          variable: "memory_usage_percent",
        },
      ],
      message1: "On Server %1 %2",
      args1: [
        {
          type: "field_variable",
          name: "SERVER_ID",
          variable: "server_id",
        },
        {
          type: "field_variable",
          name: "SERVER_HOSTNAME",
          variable: "server_hostname",
        },
      ],
      message2: "Info %1 %2 %3",
      args2: [
        {
          type: "field_variable",
          name: "TOTAL_MEMORY_GB",
          variable: "total_memory_gb",
        },
        {
          type: "field_variable",
          name: "FREE_MEMORY_GB",
          variable: "free_memory_gb",
        },
        {
          type: "field_variable",
          name: "USED_MEMORY_GB",
          variable: "used_memory_gb",
        },
      ],
      message3: "%1",
      args3: [
        {
          type: "input_statement",
          name: "MAIN",
        },
      ],
    });
  },
};

Blockly.Blocks["on_cpu_usage_update"] = {
  init: function () {
    this.jsonInit({
      colour: "#5CA699",
      message0: "On %1%",
      args0: [
        {
          type: "field_variable",
          name: "AVG_CPU_USAGE_PERCENT",
          variable: "average_cpu_usage_percent",
        },
      ],
      message1: "On Server %1 %2",
      args1: [
        {
          type: "field_variable",
          name: "SERVER_ID",
          variable: "server_id",
        },
        {
          type: "field_variable",
          name: "SERVER_HOSTNAME",
          variable: "server_hostname",
        },
      ],
      message2: "%1",
      args2: [
        {
          type: "input_statement",
          name: "MAIN",
        },
      ],
    });
  },
};
