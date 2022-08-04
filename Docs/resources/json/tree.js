var data = `{
    "Packages": {
        "Title": "Packages List",
        "Packages": {
            "Turbine": "The core Turbine API package.",
            "Turbine.Gameplay": "Provides classes for accessing game related information.",
            "Turbine.Gameplay.Attributes": "Provides classes for accessing game related information.",
            "Turbine.UI": "The core UI package that allows users to create low level controls.",
            "Turbine.UI.Lotro": "The Lord of the Rings UI package."
        }
    },
    "Turbine": {
        "Title": "Turbine Package",
        "Description": "The core Turbine API package.",
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
            "ChatType": {
                "Description": "Defines the type of chat data.",
                "Fields": {
                    "Admin": "Specifies the [key] chat type",
                    "Advancement": "Specifies the [key] chat type",
                    "Death": "Specifies the [key] chat type",
                    "Emote": "Specifies the [key] chat type",
                    "EnemyCombat": "Specifies the [key] chat type",
                    "Error": "Specifies the [key] chat type",
                    "FellowLoot": "Specifies the [key] chat type",
                    "Fellowship": "Specifies the [key] chat type",
                    "Kinship": "Specifies the [key] chat type",
                    "LFF": "Specifies the [key] chat type",
                    "Localized1": "Specifies the [key] chat type",
                    "Localized2": "Specifies the [key] chat type",
                    "Narration": "Specifies the [key] chat type",
                    "Officer": "Specifies the [key] chat type",
                    "OOC": "Specifies the [key] chat type",
                    "PlayerCombat": "Specifies the [key] chat type",
                    "Quest": "Specifies the [key] chat type",
                    "Raid": "Specifies the [key] chat type",
                    "SelfLoot": "Specifies the [key] chat type",
                    "Standard": "Specifies the [key] chat type",
                    "Tell": "Specifies the [key] chat type",
                    "Trade": "Specifies the [key] chat type",
                    "Undef": "Specifies the [key] chat type",
                    "Unfiltered": "Specifies the [key] chat type",
                    "UserChat1": "Specifies the [key] chat type",
                    "UserChat2": "Specifies the [key] chat type",
                    "UserChat3": "Specifies the [key] chat type",
                    "UserChat4": "Specifies the [key] chat type",
                    "UserChat5": "Specifies the [key] chat type",
                    "UserChat6": "Specifies the [key] chat type",
                    "UserChat7": "Specifies the [key] chat type",
                    "UserChat8": "Specifies the [key] chat type",
                    "World": "Specifies the [key] chat type"
                },
                "See Also": [
                    "Turbine"
                ]     
            },
            "DataScope": {
                "Description": "Defines the scope of plugin data.",
                "Fields": {
                    "Account": "Specifies [key] plugin data",
                    "Character": "Specifies [key] plugin data",
                    "Server": "Specifies [key] plugin data"
                },
                "See Also": [
                    "Turbine"
                ]     
            },
            "Language": {
                "Description": "Defines the client languages.",
                "Fields": {
                    "English": "[key]",
                    "EnglishGB": "English GB",
                    "French": "[key]",
                    "German": "[key]",
                    "Invalid": "[key]",
                    "Russian": "[key] (deprecated)"
                },
                "See Also": [
                    "Turbine"
                ]     
            }
        },
        "Children": {
            "Chat": {
                "Description": "This class provides events for when messages are received through the game. This includes player chat, tells, in game messages, and announcements.",
                "Remarks": "This is a class used to get messages",
                "Events": {
                    "Description": "This class provides events for when messages are received through the game. This includes player chat, tells, in game messages, and announcements.",
                    "Received": {
                        "Description": "This event is fired whenever a chat message is received.",
                        "Remarks": "This event is fired whenever any chat message is received from the game or other users. The arguments for this event will contain a combination of a Sender, a ChatType, and the Message itself. The ChatType enumeration can be used to determine what kind of message was received.",
                        "Syntax": {
                            "Function": "function Turbine.Chat:Recieved(sender, args);",
                            "Parameters": {
                                "sender": {
                                    "Type": "table",
                                    "Description": "The event sender"
                                },
                                "args": {
                                    "Type": "table",
                                    "Description": "The event arguments"
                                }
                            },
                            "Returns": [
                                "number",
                                "Returns a relative game time in seconds."
                            ]
                        },
                        "See Also": [
                            "Chat",
                            "Turbine"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Chat"
                ],
                "See Also": [
                    "Turbine"
                ]
            },
            "Engine": {
                "Description": "Provides engine level information to user plugins.",
                "Remarks": "The engine class provides information about the current state of the game engine.",
                "Methods": {
                    "Description": "Provides engine level information to user plugins.",
                    "GetCallStack": {
                        "Description": "Gets the current callstack",
                        "Remarks": "This method is equivalent to debug.traceback, return the callback",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetCallStack([thread,][message [, level]])",
                            "Parameters": {
                                "thread": {
                                    "Type": "thread",
                                    "Description": "The thread which get call stack"
                                },
                                "message": {
                                    "Type": "string",
                                    "Description": "An optional *message* string that is appended at the beginning of the traceback"
                                },
                                "level": {
                                    "Type": "integer",
                                    "Description": "An optional *level* number tells at which level to start the traceback (default is 1, the function calling *traceback*"
                                }
                            },
                            "Returns": [
                                "string",
                                "The current callstack"
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    },
                    "GetDate": {
                        "Description": "Gets the current date",
                        "Remarks": "Gets the current date",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetDate();",
                            "Returns": [
                                "Object",
                                "Returns a table containing information about the current date. The following fields are available: Year, Month, Day, Hour, Minute, Second, DayOfWeek, DayOfYear, and IsDST."
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    },
                    "GetGameTime": {
                        "Description": "Gets the current relative game time.",
                        "Remarks": "Gets the current game time as a relative value that can be used for delta time processing.",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetGameTime();",
                            "Returns": [
                                "number",
                                "Returns a relative game time in seconds."
                            ]
                        },
                        "Examples": {
                            "Description": "This example demonstrates using GetGameTime to calculate the delta time over multiple updates for performing animations.",
                            "Title": "Calculating Delta Time",
                            "Code": [
                                "local currentGameTime = Turbine.Engine.GetGameTime();",
                                "local delta = currentGameTime - previousGameTime;",
                                "previousGameTime = currentGameTime;",
                                "",
                                "-- Performing a translation from one position to another over a 5",
                                "-- second period.",
                                "self:SetLeft( self.startLeft + ( self.endLeft - self.StartLeft ) * ( delta / 5 ) );"
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    "Parent.Child",
                    "Turbine.Object",
                    "Turbine.Chat",
                    "Turbine.Gameplay.Backpack"
                ]
            },
            "Example": {
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
                "Examples": {
                    "Description": "This example demonstrates using GetGameTime to calculate the delta time over multiple updates for performing animations.",
                    "Title": "Calculating Delta Time",
                    "Code": [
                        "local currentGameTime = Turbine.Engine.GetGameTime();",
                        "local delta = currentGameTime - previousGameTime;",
                        "previousGameTime = currentGameTime;",
                        "",
                        "-- Performing a translation from one position to another over a 5",
                        "-- second period.",
                        "self:SetLeft( self.startLeft + ( self.endLeft - self.StartLeft ) * ( delta / 5 ) );"                
                    ]
                },
                "See Also": [
                    "Chat",
                    "Turbine"
                ]
            }
        }
    }
}`