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
                    "Name": "Description"
                },
                "See Also": [
                    "Turbine"
                ]     
            },
            "DataScope": {
                "Description": "Defines the scope of plugin data.",
                "Fields": {
                    "Name": "Description"
                },
                "See Also": [
                    "Turbine"
                ]     
            },
            "Language": {
                "Description": "Defines the client languages.",
                "Fields": {
                    "Name": "Description"
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
                    "Received": {
                        "Description": "This event is fired whenever a chat message is received.",
                        "Remarks": "This event is fired whenever any chat message is received from the game or other users. The arguments for this event will contain a combination of a Sender, a ChatType, and the Message itself. The ChatType enumeration can be used to determine what kind of message was received.",
                        "Syntax": {
                            "Function": "function Chat:Recieved(sender, args)\n\nend",
                            "Returns": [
                                "number",
                                "Returns a relative game time in seconds."
                            ]
                        },
                        "Examples": {
                            "Description": "This example demonstrates using GetGameTime to calculate the delta time over multiple updates for performing animations."
                        },
                        "See Also": [
                            "Engine",
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
                ],
                "Children": {
                    
                }
            },
            "Engine": {
                "Description": "Provides engine level information to user plugins.",
                "Remarks": "The engine class provides information about the current state of the game engine.",
                "Methods": {
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
                                    "Description": "An optional 'message' string that is appended at the beginning of the traceback"
                                },
                                "level": {
                                    "Type": "integer",
                                    "Description": "An optional 'level' number tells at which level to start the traceback (default is 1, the function calling 'traceback'"
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
                    "GameTime": {
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
                    {"Spaces": "Parent.Child"},
                    {"1": "Turbine.Object"},
                    {"2": "Turbine.Chat"},
                    {"2": "Turbine.Gameplay.Backpack"}
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