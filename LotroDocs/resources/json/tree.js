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
                    "GetConfiguration":{
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
                    "GetName":{
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
                    "GetVersion":{
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
                    "Hunter":  "Hunter class.",
                    "LoreMaster": "Lore Master class.",
                    "Minstrel": "Minstrel class.",
                    "Ranger":  "Ranger class.",
                    "Reaver":  "Reaver class.",
                    "RuneKeeper": "Rune-Keeper class.",
                    "Stalker": "Stalker class.",
                    "Troll":   "Troll class.",
                    "Undefined": "An undefined Class.",
                    "Warden":  "Warden class.",
                    "WarLeader": "WarLeader class.",
                    "Weaver":  "Weaver class."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "CraftTier": {
                "Description": "A crafting tier",
                "Fields": {
                    "Apprentice":	"Apprentice level.",
                    "Artisan":	    "Artisan level.",
                    "Eastemnet":	"Eastemnet level.",
                    "Expert":	    "Expert level.",
                    "Journeyman":	"Journeyman level.",
                    "Master":	    "Master level.",
                    "Supreme":	    "Supreme level.",
                    "Westemnet":	"Westemnet level.",
                    "Westfold":	    "Westfold level.",
                    "Undefined":	"An undefined profession."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "EffectCategory": {
                "Description": "Describes the category of an effect.",
                "Fields": {
                    "Corruption":	"A corruption effect.",
                    "Cry":	        "A cry effect.",
                    "Disease":	    "A disease effect.",
                    "Dispellable":	"A dispellable effect.",
                    "Elemental":	"An elemental effect.",
                    "Fear":	        "A fear effect.",
                    "Physical":	    "A physical effect.",
                    "Poison":	    "A poison effect.",
                    "Song":	        "A song effect.",
                    "Undefined":	"An undefined category.",
                    "Wound":	    "A wound effect."
                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "EquipmentSlot": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemCategory": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemDurability": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemQuality": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ItemWearState": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Profession": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Race": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "ReadyState": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "SkillType": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            },
            "Vocation": {
                "Description": "",
                "Fields": {

                },
                "See Also": [
                    "Turbine.Gameplay"
                ]
            }
        },
        "Classes": {
            "ActiveSkill": {},
            "Actor": {},
            "Attributes": {},
            "Backpack": {},
            "Bank": {},
            "BasicMount": {},
            "ClassAttributes": {},
            "CombatMount": {},
            "Effect": {},
            "EffectList": {},
            "Entity": {},
            "EntityReference": {},
            "Equipment": {},
            "GambitSkill": {},
            "GambitSkillInfo": {},
            "Item": {},
            "ItemInfo": {},
            "LocalPlayer": {},
            "Mount": {},
            "Party": {},
            "PartyMember": {},
            "Pet": {},
            "Player": {},
            "ProfessionInfo": {},
            "PropertyHandler": {},
            "Recipe": {},
            "RecipeIngredient": {},
            "SharedStorage": {},
            "Skill": {},
            "SkillInfo": {},
            "SkillList": {},
            "UntrainedSkill": {},
            "Vault": {},
            "Wallet": {},
            "WalletItem": {}
        }
    }
}`