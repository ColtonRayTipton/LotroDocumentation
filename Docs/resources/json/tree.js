var data = `{
    "Turbine": {
        "Title": "Turbine Package",
        "Remarks": "The Turbine package provides access to core game functionality.",
        "Classes": {
            "Chat": "This class provides events for when messages are received through the game. This includes player chat, tells, in game messages, and announcements.",
            "Engine": "Provides engine level information to user plugins.",
            "LotroPluginManager": "Provides access to plugin management methods.",
            "Object": "The base object class for API classes.",
            "Plugin": "Provides information about a specific plugin that has been loaded.",
            "PluginData": "Provides the ability to save and load plugin data.",
            "PluginManager": "Provides access to plugin management methods.",
            "Shell": "Provides programmer extensibility to the chat window.",
            "ShellCommand": "A command that can be register for use in the chat window."
        },
        "Enumerations": {
            "ChatType": "Defines the type of chat data.",
            "DataScope": "Defines the scope of plugin data.",
            "Language": "Defines the client languages."
        },
        "Children": {
            "Chat": {
                "Title": "Chat Class",
                "Remarks": "This is a class used to get messages",
                "Events": {
                    "Received": "This event is fired whenever a chat message is received."
                },
                "Inheritance Hierarchy": [
                    {"1": "Turbine.Object"},
                    {"2": "Turbine.Chat"}
                ],
                "See Also": [
                    "Turbine"
                ],
                "Children": {
                    
                }
            },
            "Engine": {
                "Title": "Engine Class",
                "Description": "Provides engine level information to user plugins.",
                "Remarks": "The engine class provides information about the current state of the game engine.",
                "Methods": {
                    "Name": {
                        "Title": "Title",
                        "Description": "Description",
                        "Remarks": "Remarks",
                        "Syntax": {
                            "Returns": [
                                "Type",
                                "Description"
                            ],
                            "Parameters": {
                                "sender": [
                                    "Type",
                                    "Description"
                                ]
                            }
                        },
                        "See Also": [
                            "Turbine"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    {"1": "Turbine.Engine"}
                ],
                "Syntax": {
                    "Returns": [
                        "Type",
                        "Description"
                    ],
                    "Parameters": {
                        "sender": [
                            "Type",
                            "Description"
                        ]
                    }
                },
                "See Also": [
                    "Turbine"
                ]
            },
            "Example": {
                "Title": "Turbine Package",
                "Description": "The core Turbine API package.",
                "Remarks": "The Turbine package provides access to core game functionality.",
                "Classes": {
                    "Name": "Description"
                },
                "Enumerations": {
                    "Name": "Description"
                },
                "Fields": {
                    "Name": "Description"
                },
                "Inheritance Hierarchy": [
                    {"Spaces": "Parent.Child"},
                    {"1": "Turbine.Object"},
                    {"2": "Turbine.Chat"},
                    {"2": "Turbine.Gameplay.Backpack"}
                ],
                "Syntax": {
                    "Returns": [
                        "Type",
                        "Description"
                    ],
                    "Parameters": {
                        "sender": [
                            "Type",
                            "Description"
                        ]
                    }
                },
                "See Also": [
                    "Chat",
                    "Turbine"
                ]
            }
        }
    }
}`