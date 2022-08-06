var data=`{
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
            "Object": {
                "Icon": "blackbox",
                "Description": "The base object class for API classes.",
                "Remarks": "This is an internal class used by the API classes as a foundation.",
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Chat",
                    "Turbine.Plugin",
                    "Turbine.Gameplay.Backpack",
                    "Turbine.Gameplay.Bank",
                    "Turbine.Gameplay.Effect",
                    "Turbine.Gameplay.EffectList",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.Equipment",
                    "Turbine.Gameplay.ItemInfo",
                    "Turbine.Gameplay.Party",
                    "Turbine.Gameplay.ProfessionInfo",
                    "Turbine.Gameplay.Recipe",
                    "Turbine.Gameplay.RecipeIngredient",
                    "Turbine.Gameplay.Skill",
                    "Turbine.Gameplay.SkillInfo",
                    "Turbine.Gameplay.SkillList",
                    "Turbine.Gameplay.Wallet",
                    "Turbine.Gameplay.WalletItem",
                    "Turbine.UI.Color",
                    "Turbine.UI.ContextMenu",
                    "Turbine.UI.Control",
                    "Turbine.UI.ControlList",
                    "Turbine.UI.DragDropInfo",
                    "Turbine.UI.Graphic",
                    "Turbine.UI.Lotro.LotroUI",
                    "Turbine.UI.Lotro.Shortcut",
                    "Turbine.UI.MenuItem",
                    "Turbine.UI.MenuItemList",
                    "Turbine.UI.TreeNodeList"
                ],
                "See Also": [
                    "Turbine"
                ]
            },
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
                                "sender": [
                                    "table",
                                    "The event sender"
                                ],
                                "args": [
                                    "table",
                                    "The event arguments"
                                ]
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
                                "thread": [
                                    "thread",
                                    "The thread which get call stack"
                                ],
                                "message": [
                                    "string",
                                    "An optional *message* string that is appended at the beginning of the traceback"
                                ],
                                "level": [
                                    "integer",
                                    "An optional *level* number tells at which level to start the traceback (default is 1, the function calling *traceback*"
                                ]
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
                                "message": [
                                    "string",
                                    "The message to send to the log"
                                ]
                            }
                        },
                        "See Also": [
                            "Engine",
                            "Turbine"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    "Turbine",
                    "Turbine.Engine"
                ]
            },
            "Plugin": {
                "Description": "Provides information about a specific plugin that has been loaded.",
                "Remarks": "A plugin class is created for every plugin that has been loaded. Plugins are registered into the global __plugins table by their name. To query all the plugins that are loaded, just iterate over that table.",
                "Methods": {
                    "GetAuthor": {
                        "Description": "Gets the author of the plugin",
                        "Remarks": "This method gets the author of the plugin that was specified in the plugin information file",
                        "Syntax": {
                            "Function": "function Plugin:[parent]();",
                            "Returns": [
                                "string",
                                "The author of the plugin"
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Plugin"
                        ]
                    },
                    "GetConfiguration": {
                        "Description": "Gets the plugin configuration information.",
                        "Remarks": "This method returns a structure of information mapped out of the plugin information file under the configuration element.",
                        "Syntax": {
                            "Function": "function Plugin:[parent]();",
                            "Returns": [
                                "string",
                                "The plugins configuration"
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Plugin"
                        ]
                    },
                    "GetName": {
                        "Description": "Gets the name of the plugin.",
                        "Remarks": "This method gets the name of the plugin that was specified in the plugin information file.",
                        "Syntax": {
                            "Function": "function Plugin:[parent]();",
                            "Returns": [
                                "string",
                                "The name of the plugin"
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Plugin"
                        ]
                    },
                    "GetVersion": {
                        "Description": "Gets the version of the plugin.",
                        "Remarks": "This method gets the version of the plugin that was specified in the plugin information file.",
                        "Syntax": {
                            "Function": "function Plugin:[parent]();",
                            "Returns": [
                                "string",
                                "The version of the plugin"
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Plugin"
                        ]
                    }
                },
                "Events": {
                    "Load": {
                        "Description": "Event fired when a plugin's main package has finished loading.",
                        "Syntax": {
                            "Function": "function Plugin:[parent](sender, args);",
                            "Parameters": {
                                "sender": [
                                    "table",
                                    "the event sender"
                                ],
                                "args": [
                                    "table",
                                    "the event arguments"
                                ]
                            }
                        },
                        "See Also": [
                            "Turbine",
                            "Plugin"
                        ]
                    },
                    "Unload": {
                        "Description": "Event fired before a plugin is unloaded.",
                        "Syntax": {
                            "Function": "function Plugin:[parent](sender, args);",
                            "Returns": [
                                "string",
                                "The name of the plugin"
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Plugin"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Plugin"
                ],
                "See Also": [
                    "Turbine"
                ]
            },
            "PluginData": {
                "Description": "Provides the ability to save and load plugin data.",
                "Remarks": "This class provides a data store for loading and saving plugin data the is represented by a Lua table. This data can be stored to keys chosen by the plugins and then loaded later to allow a persistent store for information and settings.",
                "Methods": {
                    "Load": {
                        "Description": "Loads plugin data from a given key.",
                        "Remarks": "This method deserializes object data. If the data is immediately available it will be returned. If the data is not immediately available this will return nil and the data loaded handler will be invoked later once the data is available.",
                        "Syntax": {
                            "Function": "function PluginData.Load(dataScope, key [, callbackFunction]);",
                            "Parameters": {
                                "dataScope": [
                                    "number",
                                    "The scope of the data. Data scope can be specified to an Account, a Server, or to a specific Character"
                                ],
                                "key": [
                                    "string",
                                    "The key the data is stored under"
                                ],
                                "callbackFunction": [
                                    "function",
                                    "A function that is called when the data loaded."
                                ]
                            },
                            "Returns": [
                                "Object",
                                "The loaded data. If the data does not exist, this will simply return nil."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "PluginData"
                        ]
                    },
                    "Save": {
                        "Description": "Saves plugin data from a given key.",
                        "Remarks": "This method serializes the object data passed to the specified key. Any existing data is replaced with the new data.",
                        "Syntax": {
                            "Function": "function PluginData.Save(dataScope, key, data [, callbackFunction(succeeded, message)]);",
                            "Parameters": {
                                "dataScope": [
                                    "number",
                                    "The scope of the data. Data scope can be specified to an Account, a Server, or to a specific Character"
                                ],
                                "key": [
                                    "string",
                                    "The key the to store the data under"
                                ],
                                "data": [
                                    "Object",
                                    "The data to save."
                                ],
                                "callbackFunction": [
                                    "function",
                                    "Event handler called when the data is saved. It has two arguments, the first specifies if the save succeeded and the second is a message if it failed."
                                ]
                            },
                            "Returns": [
                                "Object",
                                "The loaded data. If the data does not exist, this will simply return nil."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "PluginData"
                        ]
                    }
                },
                "See Also": [
                    "Turbine"
                ]
            },
            "PluginManager": {
                "Description": "Provides access to plugin management methods.",
                "Remarks": "The plugin manager class allows scripts to obtain information about the set of available and loaded plugins. It also provides methods for dynamically loading and unloading plugins as well as obtain.There is a slight disconnect in the method used to load and unload plugins. Plugins are loaded by their plugin name but are unloaded by the script state they are loaded into. Multiple plugins can be loaded into the same script state and by doing this those plugins have the ability to share code and interact with each other whereas plugins loaded into separate script states will be forced to create copies of any loaded library and will not have the ability to access each other.During unload, an entire script state gets unloaded which will unload all of the plugins that have been loaded into that script state. It is important to keep in mind this disconnect.",
                "Classes": {
                    "LotroPluginManager": {
                        "Methods": {
                            "ShowOptions": {
                                "Description": "Displays the options panel for the specified plugin.",
                                "Remarks": "Displays the options panel for the specified plugin.",
                                "Syntax": {
                                    "Function": "function LotroPluginManager.ShowOptions(plugin);",
                                    "Parameters": {
                                        "plugin": [
                                            "plugin",
                                            ""
                                        ]
                                    }
                                },
                                "See Also": [
                                    "Turbine",
                                    "LotroPluginManager"
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
                },
                "Methods": {
                    "GetAvailablePlugins": {
                        "Description": "Gets the plugins that are currently available.",
                        "Syntax": {
                            "Function": "function PluginManager.GetAvailablePlugins();",
                            "Returns": [
                                "Type: Object",
                                "Returns a table containing the plugins that are currently available"
                            ]
                        },
                        "See Also": [
                            "PluginManager",
                            "Turbine"
                        ]
                    },
                    "GetLoadedPlugins": {
                        "Description": "Gets the plugins that are currently loaded.",
                        "Syntax": {
                            "Function": "function PluginManager.GetLoadedPlugins();",
                            "Returns": [
                                "Type: Object",
                                "Returns a table containing the currently loaded plugins"
                            ]
                        },
                        "See Also": [
                            "PluginManager",
                            "Turbine"
                        ]
                    },
                    "LoadPlugin": {
                        "Description": "Loads the plugin that is requested if it is available",
                        "Syntax": {
                            "Function": "function PluginManager.LoadPlugin(pluginName);",
                            "Parameters": {
                                "pluginName": [
                                    "string",
                                    "The name of the plugin to load as specified in its plugin definition file"
                                ]
                            }
                        },
                        "See Also": [
                            "PluginManager",
                            "Turbine"
                        ]
                    },
                    "RefreshAvailablePlugins": {
                        "Description": "Refreshes the list of available plugins.",
                        "Remarks": "Refreshes the list of available plugins from disk. This does not force the unload of any plugins whose plugin definition file has been removed, but plugins whose plugin definition file has been removed will no longer be visible in the list of available plugins.",
                        "Syntax": {
                            "Function": "function PluginManager.RefreshAvailablePlugins();"
                        },
                        "See Also": [
                            "PluginManager",
                            "Turbine"
                        ]
                    },
                    "UnloadScriptState": {
                        "Description": "Unloads the script state specified.",
                        "Remarks": "Unloads the script state that is specified. Unloading a script state results in the unloading of every plugin that was loaded into that script state.The script state that is used to invoke this method cannot unload itself.",
                        "Syntax": {
                            "Function": "function PluginManager.UnloadScriptState(scriptState);",
                            "Parameters": {
                                "pluginName": [
                                    "string",
                                    "The name of the script state to be unloaded."
                                ]
                            }
                        },
                        "See Also": [
                            "PluginManager",
                            "Turbine"
                        ]
                    }
                },
                "Inheritance Hierarchy": [
                    "Turbine",
                    "Turbine.PluginManager"
                ],
                "See Also": [
                    "Turbine"
                ]
            },
            "Shell": {
                "Description": "Provides programmer extensibility to the chat window.",
                "Remarks": "This class enables plugins to access the chat window shell, allowing them to register their own commands and query the list of commands available. The ability to execute commands is protected and not available to user mods.",
                "Methods": {
                    "AddCommand": {
                        "Description": "Adds a command that can be executed",
                        "Remarks": "This method will attempt to register the shell command specified for each of the names specified in the semicolon separated list of names passed into the name argument.The return value indicates how many of the names were successful registered. This may be less than the number of names specified if some of the names are already bound to other commands in the shell.",
                        "Syntax": {
                            "Function": "function Shell.[parent](name, shellCommand)",
                            "Parameters": {
                                "name": [
                                    "string",
                                    "The name of the command that can be executed. Multiple names can be specified by sperating them using a semicolon ';'"
                                ],
                                "shellCommand": [
                                    "ShellCommand",
                                    "The shell command to bind to the names"
                                ]
                            },
                            "Returns": [
                                "number",
                                "The number of names from the name argument that were successfully registered"
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Shell"
                        ]
                    },
                    "GetCommands": {
                        "Description": "Gets the list of commands available by the shell.",
                        "Remarks": "This method will return a list of strings that identifies all the commands that can be executed from a user's chat window. This list includes all aliases for commands as well.",
                        "Syntax": {
                            "Function": "function Shell.[parent]()",
                            "Returns": [
                                "string",
                                "The list of available commands that can be executed."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Shell"
                        ]
                    },
                    "IsCommand": {
                        "Description": "Gets the list of commands available by the shell.",
                        "Remarks": "This method can be used to see if a shell command already exists. Attempts to add a shell command when there is already a command registered will fail to register.",
                        "Syntax": {
                            "Function": "function Shell.[parent](name)",
                            "Parameters": {
                                "name": [
                                    "string",
                                    "The name of the command to check for the existence of"
                                ]
                            },
                            "Returns": [
                                "boolean",
                                "True if the command is registered."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Shell"
                        ]
                    },
                    "RemoveCommand": {
                        "Description": "Removes a command that has been added using AddCommand.",
                        "Remarks": "This method will remove all the references to the shell command that were registered using AddCommand.",
                        "Syntax": {
                            "Function": "function Shell.[parent](shellCommand)",
                            "Parameters": {
                                "shellCommand": [
                                    "ShellCommand",
                                    "The shell command to unregister. This removes the registration from all the names that use the shell command."
                                ]
                            },
                            "Returns": [
                                "boolean",
                                "True if the command is registered."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "Shell"
                        ]
                    },
                    "WriteLine": {
                        "Description": "Writes a line of text to the chat window.",
                        "Remarks": "This method takes in a string and displays the text in the chat window. This text is marked as standard text for chat filtering purposes.",
                        "Syntax": {
                            "Function": "function Shell.[parent](text)",
                            "Parameters": {
                                "text": [
                                    "string",
                                    "The text to display"
                                ]
                            }
                        },
                        "See Also": [
                            "Turbine",
                            "Shell"
                        ]
                    }
                },
                "Examples": {
                    "Description": "This example demonstrates how to test if a command is available.",
                    "Title": "Checking for a command",
                    "Code": [
                        "local canDance = Turbine.Shell.IsCommand('dance');",
                        "Turbine.Shell.WriteLine('Does the dance command exist? ' .. canDance );"
                    ]
                },
                "See Also": [
                    "Turbine"
                ]
            },
            "ShellCommand": {
                "Description": "A command that can be register for use in the chat window.",
                "Remarks": "This class provides the ability to define custom chat window commands in a lua script. Commands are registers using the LuaShell class.",
                "Methods": {
                    "Execute": {
                        "Description": "Executes the command",
                        "Remarks": "This method is called either by a script or execute when a user types a chat command registered for this shell command.",
                        "Syntax": {
                            "Function": "function ShellCommand.[parent](argumentText)",
                            "Parameters": {
                                "argumentText": [
                                    "string",
                                    "The arguments string passed along with the command."
                                ]
                            }
                        },
                        "See Also": [
                            "Turbine",
                            "ShellCommand"
                        ]
                    },
                    "GetHelp": {
                        "Description": "Gets the help information for the command.",
                        "Remarks": "This method gets the extended help information for the command. It is suitable for this help text to contain newlines.",
                        "Syntax": {
                            "Function": "function ShellCommand.[parent]()",
                            "Returns": [
                                "string",
                                "The help information for the command."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "ShellCommand"
                        ]
                    },
                    "GetShortHelp": {
                        "Description": "Gets a short help string for the command.",
                        "Remarks": "The short help text is the text display when a play displays the entire list of commands.",
                        "Syntax": {
                            "Function": "function ShellCommand.[parent]()",
                            "Returns": [
                                "string",
                                "A short help string for the command."
                            ]
                        },
                        "See Also": [
                            "Turbine",
                            "ShellCommand"
                        ]
                    }
                },
                "See Also": [
                    "Turbine"
                ]
            }
        }
    },
    "TurbinedotGameplay": {
        "Title": "Turbine.Gameplay Package",
        "Description": "Provides classes for accessing game related information.",
        "Remarks": "This package is used to access various information about the game that is available to a player.",
        "Enumerations": {
            "Alignment": {
                "Description": "The alignment of a player",
                "Fields": {
                    "FreePeople": "A player aligned with the Free people",
                    "MonsterPlay": "A monster player",
                    "Undefined": "An undefined alignment"
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Class": {
                "Description": "The Class of a player",
                "Fields": {
                    "Beorning": "Beorning class.",
                    "BlackArrow": "Black Arrow class.",
                    "Burglar": "Burglar class.",
                    "Captain": "Captain class.",
                    "Champion": "Champion class.",
                    "Chicken": "Chicken class.",
                    "Defiler": "Defiler class.",
                    "Guardian": "Guardian class.",
                    "Hunter": "Hunter class.",
                    "LoreMaster": "Lore Master class.",
                    "Minstrel": "Minstrel class.",
                    "Ranger": "Ranger class.",
                    "Reaver": "Reaver class.",
                    "RuneKeeper": "Rune-Keeper class.",
                    "Stalker": "Stalker class.",
                    "Troll": "Troll class.",
                    "Undefined": "An undefined Class.",
                    "Warden": "Warden class.",
                    "WarLeader": "WarLeader class.",
                    "Weaver": "Weaver class."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "CraftTier": {
                "Description": "A crafting tier",
                "Fields": {
                    "Apprentice": "Apprentice level.",
                    "Artisan": "Artisan level.",
                    "Eastemnet": "Eastemnet level.",
                    "Expert": "Expert level.",
                    "Journeyman": "Journeyman level.",
                    "Master": "Master level.",
                    "Supreme": "Supreme level.",
                    "Westemnet": "Westemnet level.",
                    "Westfold": "Westfold level.",
                    "Undefined": "An undefined profession."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "EffectCategory": {
                "Description": "Describes the category of an effect.",
                "Fields": {
                    "Corruption": "A corruption effect.",
                    "Cry": "A cry effect.",
                    "Disease": "A disease effect.",
                    "Dispellable": "A dispellable effect.",
                    "Elemental": "An elemental effect.",
                    "Fear": "A fear effect.",
                    "Physical": "A physical effect.",
                    "Poison": "A poison effect.",
                    "Song": "A song effect.",
                    "Undefined": "An undefined category.",
                    "Wound": "A wound effect."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "EquipmentSlot": {
                "Description": "The equipment slot in the player's equipment.",
                "Fields": {
                    "Back": "The back equipment slot.",
                    "Boots": "The boots equipment slot.",
                    "Bracelet1": "The bracelet 1 equipment slot.",
                    "Bracelet2": "The bacelet 2 equipment slot.",
                    "Chest": "The chest equipment slot.",
                    "Class": "The class equipment slot.",
                    "CraftTool": "The craft tool equipment slot.",
                    "Earring1": "The earring 1 equipment slot.",
                    "Earring2": "The earring 2 equipment slot.",
                    "Gloves": "The gloves equipment slot.",
                    "Head": "The head equipment slot.",
                    "Instrument": "The instrument equipment slot.",
                    "Legs": "The legs equipment slot.",
                    "Necklace": "The necklace equipment slot.",
                    "Pocket": "The pocket equipment slot.",
                    "PrimaryWeapon": "The primary weapon equipment slot.",
                    "RangedWeapon": "The ranged weapon equipment slot.",
                    "Ring1": "The ring 1 equipment slot.",
                    "Ring2": "The ring 2 equipment slot.",
                    "SecondaryWeapon": "The secondary weapon equipment slot.",
                    "Shield": "The shield equipment slot.",
                    "Shoulder": "The shoulder equipment slot.",
                    "Undefined": "An undefined equipment slot."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemCategory": {
                "Description": "Describes the category of an item.",
                "Fields": {
                    "ApprenticeCookScroll":	    "Category for an apprentice cook scroll.",
                    "ApprenticeFarmerScroll":	    "Category for an apprentice farmer scroll.",
                    "ApprenticeForestryScroll":	"Category for an apprentice forestry scroll.",
                    "ApprenticeJewellerScroll":	"Category for an apprentice jeweller scroll.",
                    "ApprenticeMetalworkScroll":	"Category for an apprentice metalwork scroll.",
                    "ApprenticeProspectingScroll":	"Category for an apprentice prospecting scroll.",
                    "ApprenticeScholarScroll":	    "Category for an apprentice scholar scroll.",
                    "ApprenticeTailorScroll":	    "Category for an apprentice tailor scroll.",
                    "ApprenticeWeaponsmithScroll":	    "Category for an apprentice weaponsmith scroll.",
                    "ApprenticeWoodworkScroll":	    "Category for an apprentice woodwork scroll.",
                    "Armor":	    "Category for an armor item.",
                    "ArtisanCookScroll":	    "Category for an artisan cook scroll.",
                    "ArtisanFarmerScroll":	    "Category for an artisan farmer scroll.",
                    "ArtisanForestryScroll":	    "Category for an artisan forestry scroll.",
                    "ArtisanJewellerScroll":	    "Category for an artisan jeweller scroll.",
                    "ArtisanMetalworkScroll":	    "Category for an artisan metalwork scroll.",
                    "ArtisanProspectingScroll":	    "Category for an artisan prospecting scroll.",
                    "ArtisanScholarScroll":	    "Category for an artisan scholar scroll.",
                    "ArtisanTailorScroll":	    "Category for an artisan tailor scroll.",
                    "ArtisanWeaponsmithScroll":	    "Category for an artisan weaponsmith scroll.",
                    "ArtisanWoodworkScroll":	    "Category for an artisan woodwork scroll.",
                    "Axe":	"Category for an axe.",
                    "Back":	    "Category for equipment for the back.",
                    "Barter":	    "Category for a barter item.",
                    "Book":	    "Category for a book.",
                    "Bow":	    "Category for a bow.",
                    "Burglar":	    "Category for a burglar item.",
                    "Captain":	    "Category for a captain item.",
                    "CeilingDecoration":	    "Category for ceiling decorations.",
                    "Champion":	    "Category for a champion item.",
                    "Chest":	    "Category for a chest.",
                    "Clothing":	    "Category for clothing.",
                    "Club":	    "Category for a club.",
                    "Component":	    "Category for a recipe component.",
                    "CosmeticBack":	    "Category for cosmetic equipment for the back.",
                    "CosmeticChest":	    "Category for cosmetic equipment for the chest.",
                    "CosmeticClass":	    "Category for cosmetic equipment for a class.",
                    "CosmeticFeet":	    "Category for cosmetic equipment for the feet.",
                    "CosmeticHands":	    "Category for cosmetic equipment for the hands.",
                    "CosmeticHead":	    "Category for cosmetic equipment for the head.",
                    "CosmeticHeld":	    "Category for cosmetic held items.",
                    "CosmeticLegs":	    "Category for cosmetic equipment for the legs.",
                    "CosmeticShoulders":	    "Category for cosmetic equipment for the shoulders.",
                    "Crafting":	    "Category for a crafting item.",
                    "CraftingTrophy":	    "Category for a crafting trophy.",
                    "Crossbow":	    "Category for a crossbow.",
                    "Dagger":	    "Category for a dagger.",
                    "Deconstructable":	    "Category for a deconstructable item.",
                    "Decoration":	    "Category for a decoration.",
                    "Device":	    "Category for a device.",
                    "Dye":	    "Category for a dye.",
                    "Effect":	    "Category for an effect.",
                    "ExpertCookScroll":	    "Category for an expert cook scroll.",
                    "ExpertFarmerScroll":	    "Category for an expert farmer scroll.",
                    "ExpertForestryScroll":	    "Category for an expert forestry scroll.",
                    "ExpertJewellerScroll":	    "Category for an expert jeweller scroll.",
                    "ExpertMetalworkScroll":	    "Category for an expert metalwork scroll.",
                    "ExpertProspectingScroll":	    "Category for an expert prospecting scroll.",
                    "ExpertScholarScroll":	    "Category for an expert scholar scroll.",
                    "ExpertTailorScroll":	    "Category for an expert tailor scroll.",
                    "ExpertWeaponsmithScroll":	    "Category for an expert weaponsmith scroll.",
                    "ExpertWoodworkScroll":	    "Category for an expert woodwork scroll.",
                    "Feet":	    "Category for foot equipment.",
                    "Festival":	    "Category for a festival item.",
                    "Fish":	    "Category for a fish.",
                    "FishingBait":	    "Category for fishing bait.",
                    "FishingOther":	    "Category for other fishing items.",
                    "FishingPole":	    "Category for a fishing pole.",
                    "FloorDecoration":	    "Category for floor decorations.",
                    "Food":	    "Category for food.",
                    "FurnitureDecoration":	    "Category for furniture decorations.",
                    "Guardian":	    "Category for a guardian item.",
                    "GuardianBelt":	    "Category for a guardian belt.",
                    "Halberd":	    "Category for a halberd.",
                    "Hammer":	    "Category for a hammer.",
                    "Hands":	    "Category for equipment for the hands.",
                    "Head":	    "Category for equipment for the head.",
                    "Healing":	    "Category for a healing item.",
                    "Horn":	    "Category for a horn.",
                    "Hunter":	    "Category for a hunter item.",
                    "Implement":	    "Category for an implement.",
                    "Ingredient":	    "Category for an ingredient.",
                    "Instrument":	    "Category for an instrument.",
                    "Javelin":	    "Category for a javelin.",
                    "Jewelry":	    "Category for a Jewelry item.",
                    "JourneymanCookScroll":	    "Category for a journeyman cook scroll.",
                    "JourneymanFarmerScroll":	    "Category for a journeyman farmer scroll.",
                    "JourneymanForestryScroll":	    "Category for a journeyman forestry scroll.",
                    "JourneymanJewellerScroll":	    "Category for a journeyman jeweller scroll.",
                    "JourneymanMetalworkScroll":	    "Category for a journeyman metalwork scroll.",
                    "JourneymanProspectingScroll":	    "Category for a journeyman prospecting scroll.",
                    "JourneymanScholarScroll":	    "Category for a journeyman scholar scroll.",
                    "JourneymanTailorScroll":	    "Category for a journeyman tailor scroll.",
                    "JourneymanWeaponsmithScroll":	    "Category for a journeyman weaponsmith scroll.",
                    "JourneymanWoodworkScroll":	   " Category for a journeyman woodwork scroll.",
                    "Key":	    "Category for a key.",
                    "KinshipCharter":	    "Category for a kinship charter.",
                    "LegendaryWeaponAddLegacy":	    "Category for a legendary weapon add legacy item.",
                    "LegendaryWeaponExperience":	    "Category for a legendary weapon experience item.",
                    "LegendaryWeaponIncreaseItemLevel":	    "Category for a legendary weapon increase item level item.",
                    "LegendaryWeaponIncreaseMaxLevel":	    "Category for a legendary weapon increase max level item.",
                    "LegendaryWeaponLegacyReveal":	    "Category for a legendary weapon legacy reveal item.",
                    "LegendaryWeaponReplaceLegacy":	    "Category for a legendary weapon replace legacy item.",
                    "LegendaryWeaponReset":	    "Category for a legendary weapon reset item.",
                    "LegendaryWeaponUnslotRelics":	    "Category for a legendary weapon unslot relics item.",
                    "LegendaryWeaponUpgradeLegacy":	    "Category for a legendary weapon upgrade legacy item.",
                    "Legs":	   " Category for equipment for the legs.",
                    "Loremaster":	    "Category for a loremaster item.",
                    "LoremasterFood":	   " Category for loremaster food items.",
                    "Mace":	   " Category for a mace.",
                    "Map":	    "Category for a map.",
                    "MasterCookScroll":	    "Category for a master cook scroll.",
                    "MasterFarmerScroll":	    "Category for a master farmer scroll.",
                    "MasterForestryScroll":	    "Category for a master forestry scroll.",
                    "MasterJewellerScroll":	    "Category for a master jeweller scroll.",
                    "MasterMetalworkScroll":	    "Category for a master metalwork scroll.",
                    "MasterProspectingScroll":	    "Category for a master prospecting scroll.",
                    "MasterScholarScroll":	    "Category for a master scholar scroll.",
                    "MasterTailorScroll":	    "Category for a master tailor scroll.",
                    "MasterWeaponsmithScroll":	    "Category for a master weaponsmith scroll.",
                    "MasterWoodworkScroll":	    "Category for a master woodwork scroll.",
                    "Minstrel":	    "Category for a minstrel item.",
                    "MinstrelBook":	    "Category for a minstrel book.",
                    "Misc":	    "Category for a misc item.",
                    "Mounts":	    "Category for mounts.",
                    "MusicDecoration":	    "Category for a music decoration item.",
                    "NonInventory":	    "Category for a non-inventory item.",
                    "Oil":	    "Category for an oil.",
                    "OptionalIngredient":	    "Category for an optional ingredient.",
                    "Orb":	    "Category for an orb.",
                    "Pennant":	    "Category for a pennant.",
                    "Perk":	    "Category for a perk.",
                    "Potion":	    "Category for a potion.",
                    "Quest":	    "Category for a quest item.",
                    "Relic":	    "Category for a relic.",
                    "Reputation":	    "Category for a reputation item.",
                    "Resource":	    "Category for a resource.",
                    "Runekeeper":	    "Category for a runekeeper item.",
                    "Scroll":	    "Category for a scroll.",
                    "Shield":	    "Category for a shield.",
                    "Shieldspike":	    "Category for a shieldspike.",
                    "Shoulders":	    "Category for shoulder equipment.",
                    "Skirmish":	    "Category for a skirmish item.",
                    "Social":	    "Category for a social item.",
                    "Spear":	    "Category for a spear.",
                    "Special":	    "Category for special item.",
                    "SpecialDecoration":	    "Category for special decorations.",
                    "SpecialTrophy":	    "Category for a special trophy.",
                    "Staff":	    "Category for a staff.",
                    "SupremeCookScroll":	    "Category for a supreme cook scroll.",
                    "SupremeFarmerScroll":	    "Category for a supreme farmer scroll.",
                    "SupremeForestryScroll":	    "Category for a supreme forestry scroll.",
                    "SupremeJewellerScroll":	    "Category for a supreme jeweller scroll.",
                    "SupremeMetalworkScroll":	    "Category for a supreme metalwork scroll.",
                    "SupremeProspectingScroll":	    "Category for a supreme prospecting scroll.",
                    "SupremeScholarScroll":	    "Category for a supreme scholar scroll.",
                    "SupremeTailorScroll":	    "Category for a supreme tailor scroll.",
                    "SupremeWeaponsmithScroll":	    "Category for a supreme weaponsmith scroll.",
                    "SupremeWoodworkScroll":	    "Category for a supreme woodwork scroll.",
                    "SurfacePaintDecoration":	    "Category for a surface paint decoration.",
                    "Sword":	    "Category for a sword.",
                    "Thrown":	    "Category for a thrown item.",
                    "Tome":	    "Category for a tome.",
                    "Tool":	    "Category for a tool.",
                    "Trap":	    "Category for a trap.",
                    "Travel":	    "Category for a travel.",
                    "Treasure":	    "Category for a treasure.",
                    "Trophy":	    "Category for a trophy.",
                    "TrophyDecoration":	    "Category for a trophy decoration.",
                    "WallDecoration":	    "Category for a wall decoration.",
                    "Warden":	    "Category for a warden item.",
                    "Weapon":	    "Category for a weapon.",
                    "WestfoldCookScroll":	    "Category for a Westfold cook scroll.",
                    "WestfoldFarmerScroll":	    "Category for a Westfold farmer scroll.",
                    "WestfoldForestryScroll":	    "Category for a Westfold forestry scroll.",
                    "WestfoldJewellerScroll":	    "Category for a Westfold jeweller scroll.",
                    "WestfoldMetalworkScroll":	    "Category for a Westfold metalwork scroll.",
                    "WestfoldProspectingScroll":	    "Category for a Westfold prospecting scroll.",
                    "WestfoldScholarScroll":	    "Category for a Westfold scholar scroll.",
                    "WestfoldTailorScroll":	    "Category for a Westfold tailor scroll.",
                    "WestfoldWeaponsmithScroll":	    "Category for a Westfold weaponsmith scroll.",
                    "WestfoldWoodworkScroll":	    "Category for a Westfold woodwork scroll.",
                    "YardDecoration":	    "Category for a yard decoration.",
                    "Undefined":	    "An undefined category."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemDurability": {
                "Description": "Describes the durability of an item.",
                "Fields": {
                    "Brittle":	        "An item that is of brittle durability.",
                    "Flimsy":	        "An item that is flimsy durability.",
                    "Indestructible":	"An item that is indestructible.",
                    "Normal":	        "An item that is of average durability.",
                    "Substantial":	    "An item that is of substantial durability.",
                    "Tough":	        "An item that is of tough durability.",
                    "Undefined":	    "An undefined durability.",
                    "Weak":	            "An item that is durability."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemQuality": {
                "Description": "Describes the quality of an item.",
                "Fields": {
                    "Common":	"An item that is common.",
                    "Incomparable":	"An item that is incomparable.",
                    "Legendary":	"An item that is legendary.",
                    "Rare":	"An item that is rare.",
                    "Uncommon":	"An item that is uncommon.",
                    "Undefined":	"An item with no defined quality."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemWearState": {
                "Description": "Describes the current wear state of an item.",
                "Fields": {
                    "Common":	    "An item that is common.",
                    "Incomparable": "An item that is incomparable.",
                    "Legendary":	"An item that is legendary.",
                    "Rare":	        "An item that is rare.",
                    "Uncommon":	    "An item that is uncommon.",
                    "Undefined":	"An item with no defined quality."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Profession": {
                "Description": "A profession a free people player can have.",
                "Fields": {
                    "Cook":	        "A cook.",
                    "Farmer":	    "A farmer.",
                    "Forester":	    "A forester.",
                    "Jeweller":	    "A jeweller.",
                    "Metalsmith":	"A metalsmith.",
                    "Prospector":	"A propspector.",
                    "Scholar":	    "A scholar.",
                    "Tailor":	    "A tailor.",
                    "Weaponsmith":	"A weaponsmith.",
                    "Woodworker":	"A woodworker.",
                    "Undefined":	"An undefined profession."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Race": {
                "Description": "The Race of a player.",
                "Fields": {
                    "Beorning":	    "Beorning race.",
                    "Dwarf":	    "Dwarf race.",
                    "Elf":	        "Elf race.",
                    "HighElf":	    "High Elf race.",
                    "Hobbit":	    "Hobbit race.",
                    "Man":	        "Man race.",
                    "StoutAxe":	    "Dwarf Stout-axe race.",
                    "Undefined":	"An undefined Race."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ReadyState": {
                "Description": "The ready state of a player.",
                "Fields": {
                    "NotReady":    "Not ready state.",
                    "Ready":	    "Ready state.",
                    "Unset":	    "An unset set."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "SkillType": {
                "Description": "A type of skill.",
                "Fields": {
                    "Gambit":	"A gambit skill.",
                    "Mount":	"A mount skill.",
                    "Normal":	"A standard skill."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Vocation": {
                "Description": "The vocation of a free people player.",
                "Fields": {
                    "Armorer":	    "An armorer.",
                    "Armsman":	    "An armsman.",
                    "Explorer":	    "An explorer.",
                    "Historian":	"A historian.",
                    "None":	        "No vocation.",
                    "Tinker":	    "A tinker.",
                    "Woodsman":	    "A woodsman.",
                    "Yeoman":	    "A yeoman."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            }
        },
        "Classes": {
            "ActiveSkill": {
                "Description": "Information about an active player's skill",
                "Methods": {

                },
                "Events": {

                },
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Skill",
                    "Turbine.Gameplay.ActiveSkill"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Actor": {
                "Description": "Base class for any entity that interacts in the world.",
                "Remarks": "Actors include things from players to NPCs to monsters, anything that can interact with other parts of the world.",
                "Methods": {

                },
                "Events": {

                },
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Actor",
                    "Turbine.Gameplay.Pet",
                    "Turbine.Gameplay.Player"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Attributes": {
                "Description": "Represents a collection of information about an entity.",
                "Remarks": "Attributes are used to encapsulate common groups of information for different types of entities. Attributes can include basic information such as Free People player stats, specific class information, information about an Actor's race, and other such information.",
                "Methods": {

                },
                "Events": {

                },
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Attributes",
                    "Turbine.Gameplay.Attributes.DwarfAttributes",
                    "Turbine.Gameplay.Attributes.ElfAttributes",
                    "Turbine.Gameplay.Attributes.FreePeopleAttributes",
                    "Turbine.Gameplay.Attributes.HighElfAttributes",
                    "Turbine.Gameplay.Attributes.HobbitAttributes",
                    "Turbine.Gameplay.Attributes.ManAttributes",
                    "Turbine.Gameplay.Attributes.MonsterPlayerAttributes",
                    "Turbine.Gameplay.Attributes.StoutAxeAttributes",
                    "Turbine.Gameplay.ClassAttributes"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Backpack": {
                "Description": "Provides access to a player's backpack.",
                "Remarks": "The backpack holds all the items that a player is carrying. This class can be used to get the size of the backpack and to access any specific item contained within.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Backpack"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Bank": {
                "Description": "A container of items that are only accessible at designated bank locations.",
                "Remarks": "A container of items that are only accessible at designated bank locations. The contents of a bank can only be used while interacting with a banker. When a banker is not available the various methods will return default values and the items will not be available.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Bank",
                    "Turbine.Gameplay.SharedStorage",
                    "Turbine.Gameplay.Vault"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "BasicMount": {
                "Description": "A basic mount.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Mount",
                    "Turbine.Gameplay.BasicMount"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ClassAttributes": {
                "Description": "Base class for class information.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Attributes",
                    "Turbine.Gameplay.ClassAttributes",
                    "Turbine.Gameplay.Attributes.BeorningAttributes",
                    "Turbine.Gameplay.Attributes.BlackArrowAttributes",
                    "Turbine.Gameplay.Attributes.BurglarAttributes",
                    "Turbine.Gameplay.Attributes.CaptainAttributes",
                    "Turbine.Gameplay.Attributes.ChampionAttributes",
                    "Turbine.Gameplay.Attributes.ChickenAttributes",
                    "Turbine.Gameplay.Attributes.DefilerAttributes",
                    "Turbine.Gameplay.Attributes.GuardianAttributes",
                    "Turbine.Gameplay.Attributes.HunterAttributes",
                    "Turbine.Gameplay.Attributes.LoreMasterAttributes",
                    "Turbine.Gameplay.Attributes.MinstrelAttributes",
                    "Turbine.Gameplay.Attributes.RangerAttributes",
                    "Turbine.Gameplay.Attributes.ReaverAttributes",
                    "Turbine.Gameplay.Attributes.RuneKeeperAttributes",
                    "Turbine.Gameplay.Attributes.StalkerAttributes",
                    "Turbine.Gameplay.Attributes.TrollAttributes",
                    "Turbine.Gameplay.Attributes.WardenAttributes",
                    "Turbine.Gameplay.Attributes.WarLeaderAttributes",
                    "Turbine.Gameplay.Attributes.WeaverAttributes"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "CombatMount": {
                "Description": "A mount that can be used in combat.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Mount",
                    "Turbine.Gameplay.CombatMount"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Effect": {
                "Description": "Represents an effect that can be applied to an entity.",
                "Remarks": "Effects are buffs or debuffs that have been applied to an entity through the environment, by other actors, or other game events.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Effect"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "EffectList": {
                "Description": "A utility class used by Actors to hold the list of effects.",
                "Remarks": "This utility class stores the list of effects that have been applied to a player.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EffectList"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Entity": {
                "Description": "Base class for any entity in the game.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Actor",
                    "Turbine.Gameplay.Item",
                    "Turbine.Gameplay.Mount"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "EntityReference": {
                "Description": "",
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Equipment": {
                "Description": "Provides access to a player's equipment.",
                "Remarks": "The equipment is the set of items the player is currently wearing. These items are accessed like an array with specific indices corresponding to specific inventory slots.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Equipment"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "GambitSkill": {
                "Description": "Information about a gambit skill.",
                "Remarks": "",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Skill",
                    "Turbine.Gameplay.GambitSkill"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "GambitSkillInfo": {
                "Description": "Information about a gambit skill.",
                "Remarks": "",
                "Methods": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Skill",
                    "Turbine.Gameplay.GambitSkillInfo"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Item": {
                "Description": "An item that a user can have.",
                "Remarks": "This class represents an in-game item that can be obtained and stored in inventory.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Item"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemInfo": {
                "Description": "Container for various item information.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.ItemInfo"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "LocalPlayer": {
                "Description": "A class that represents the local player.",
                "Remarks": "This class represents the Local Player in the world. The local player is the player logged into the world on the client which a script using this class is running.A Local Player has access to information beyond just a player, providing the ability to access the player's backpack.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Actor",
                    "Turbine.Gameplay.Player",
                    "Turbine.Gameplay.LocalPlayer"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Mount": {
                "Description": "Class representing an in game mount.",
                "Remarks": "This is the base class for the different types of mounts available in the game.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Mount",
                    "Turbine.Gameplay.BasicMount",
                    "Turbine.Gameplay.CombatMount"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Party": {
                "Description": "This class provides access to party information. This is either your fellowship or your tribe depending on your alliance.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Party"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "PartyMember": {
                "Description": "A class that represents a party member.",
                "Remarks": "",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Actor",
                    "Turbine.Gameplay.Player",
                    "Turbine.Gameplay.PartyMember"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Pet": {
                "Description": "A pet is an actor that a player owns and controls.",
                "Remarks": "A pet is an actor that a player owns and controls.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Actor",
                    "Turbine.Gameplay.Pet"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Player": {
                "Description": "A class that represents a player in the game.",
                "Remarks": "This class is the base for any player in the world. It provides additional player information beyond an Actor.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Entity",
                    "Turbine.Gameplay.Actor",
                    "Turbine.Gameplay.Player",
                    "Turbine.Gameplay.LocalPlayer",
                    "Turbine.Gameplay.PartyMember"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ProfessionInfo": {
                "Description": "Information about a profession.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.ProfessionInfo"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "PropertyHandler": {
                "Description": "",
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.EntityReference",
                    "Turbine.Gameplay.PropertyHandler",
                    "Turbine.Gameplay.Attributes",
                    "Turbine.Gameplay.Entity"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Recipe": {
                "Description": "Information about a recipe.",
                "Methods": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Recipe"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "RecipeIngredient": {
                "Description": "Information about a recipe ingredient.",
                "Methods": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.RecipeIngredient"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "SharedStorage": {
                "Description": "A bank that represents the player's shared storage. This storage is available to all characters on the same account.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Bank",
                    "Turbine.Gameplay.SharedStorage"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Skill": {
                "Description": "Information about a skill.",
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Skill",
                    "Turbine.Gameplay.ActiveSkill",
                    "Turbine.Gameplay.GambitSkill",
                    "Turbine.Gameplay.UntrainedSkill"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "SkillInfo": {
                "Description": "Information about a skill.",
                "Remarks": "",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.SkillInfo",
                    "Turbine.Gameplay.GambitSkillInfo"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "SkillList": {
                "Description": "A list of skills.",
                "Methods": {},
                "Inheritance Hierarchy": [

                ],
                "See Also": [
                    "Turbine.Gameplay",
                    "Turbine.Gameplay.SkillList"
                ]
            },
            "UntrainedSkill": {
                "Description": "Information about a skill the player has not trained yet.",
                "Methods": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Skill",
                    "Turbine.Gameplay.UntrainedSkill"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Vault": {
                "Description": "A bank that represents the player's vault storage. This storage is only available to the current logged in character.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Bank",
                    "Turbine.Gameplay.Vault"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Wallet": {
                "Description": "Provides access to a player's wallet.",
                "Remarks": "The wallet is a container for various currency based items.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.Bank",
                    "Turbine.Gameplay.Wallet"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "WalletItem": {
                "Description": "An item that is contained in a user's wallet.",
                "Remarks": "This class represents an in-game wallet item that can be obtained and stored in a player's wallet.",
                "Methods": {},
                "Events": {},
                "Inheritance Hierarchy": [
                    "Turbine.Object",
                    "Turbine.Gameplay.WalletItem"
                ],
                "See Also": [
                    "Turbine.Gameplay"
                ]
            }
        }
    }
}`