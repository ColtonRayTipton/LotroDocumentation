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
        "Classes": {
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
                    },
                    "GetLanguage": {
                        "Description": "Gets the language the client is using",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetLanguage();",
                            "Returns": [
                                "number",
                                "The language the client is using"
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    },
                    "GetLocale": {
                        "Description": "Gets a string to identify the locale the application is set to.",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetLocale();",
                            "Returns": [
                                "string",
                                "The locale identifier"
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    },
                    "GetLocalTime": {
                        "Description": "Gets the number of seconds since Jan. 1, 1970",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetLocalTime();",
                            "Returns": [
                                "number",
                                "The number of seconds since Jan. 1, 1970"
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    },
                    "GetScriptVersion": {
                        "Description": "Gets the major and minor versions numbers for the Lua script system",
                        "Remarks": "This method returns as a major and minor version number. This number is not tied to the client build number and is only updated when changes to the API are made. These changes may include the addition of new APIs, the removal, changes to the functionality, or bug fixes. A new version does not necessarily mean incompatibility.",
                        "Syntax": {
                            "Function": "function Turbine.Engine.GetScriptVersion();",
                            "Returns": [
                                "number, number",
                                ""
                            ]
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    },
                    "ScriptLog": {
                        "Description": "Logs a message to the script log.",
                        "Remarks": "Logs a message to the script log. This is a shared log for all scripts that can be used to write information for a running script.",
                        "Syntax": {
                            "Function": "function Turbine.Engine.ScriptLog();",
                            "Parameters": {
                                "message": {
                                    "Type": "string",
                                    "Description": "The message to send to the log"
                                }
                            }
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Chat",
                    "Turbine.Gameplay.Backpack"
                ]
            },
            "LotroPluginManager": {
                "Description": "Provides access to plugin management methods.",
                "Remarks": "The plugin manager class allows scripts to obtain information about the set of available and loaded plugins. It also provides methods for dynamically loading and unloading plugins as well as obtain.There is a slight disconnect in the method used to load and unload plugins. Plugins are loaded by their plugin name but are unloaded by the script state they are loaded into. Multiple plugins can be loaded into the same script state and by doing this those plugins have the ability to share code and interact with each other whereas plugins loaded into separate script states will be forced to create copies of any loaded library and will not have the ability to access each other.During unload, an entire script state gets unloaded which will unload all of the plugins that have been loaded into that script state. It is important to keep in mind this disconnect.",
                "Methods": {
                    "GetAvailablePlugins": {
                        "Description": "Gets the plugins that are currently available.",
                        "Syntax": {
                            "Function": "function PluginManager.GetAvailablePlugins();",
                            "Returns": [
                                "Type: Object",
                                "Returns a table container the plugins that are currently available"
                            ]
                        },
                        "See Also": [
                            "LotroPluginManager",
                            "Turbine"
                        ]
                    }
                }, 
                "Inheritance Hierarchy": [
                    "Turbine.PluginManager",
                    "Turbine.LotroPluginManager"
                ],
                "See Also": [
                    "Turbine"
                ]
            }
        }
    }
}`