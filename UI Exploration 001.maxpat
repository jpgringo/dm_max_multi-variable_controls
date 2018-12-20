{
	"patcher" : 	{
		"fileversion" : 1,
		"appversion" : 		{
			"major" : 8,
			"minor" : 0,
			"revision" : 0,
			"architecture" : "x64",
			"modernui" : 1
		}
,
		"rect" : [ 55.0, 604.0, 824.0, 409.0 ],
		"bglocked" : 0,
		"openinpresentation" : 0,
		"default_fontsize" : 12.0,
		"default_fontface" : 0,
		"default_fontname" : "Arial",
		"gridonopen" : 1,
		"gridsize" : [ 15.0, 15.0 ],
		"gridsnaponopen" : 1,
		"objectsnaponopen" : 1,
		"statusbarvisible" : 2,
		"toolbarvisible" : 1,
		"lefttoolbarpinned" : 0,
		"toptoolbarpinned" : 0,
		"righttoolbarpinned" : 0,
		"bottomtoolbarpinned" : 0,
		"toolbars_unpinned_last_save" : 0,
		"tallnewobj" : 0,
		"boxanimatetime" : 200,
		"enablehscroll" : 1,
		"enablevscroll" : 1,
		"devicewidth" : 0.0,
		"description" : "",
		"digest" : "",
		"tags" : "",
		"style" : "",
		"subpatcher_template" : "",
		"boxes" : [ 			{
				"box" : 				{
					"id" : "obj-11",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 72.0, 114.0, 37.0, 22.0 ],
					"presentation_rect" : [ 72.0, 114.0, 37.0, 22.0 ],
					"style" : "",
					"text" : "1 2 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-9",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 458.0, 108.0, 57.0, 22.0 ],
					"presentation_rect" : [ 458.0, 108.0, 57.0, 22.0 ],
					"style" : "",
					"text" : "foo 1 2 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-7",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 346.0, 106.0, 75.0, 22.0 ],
					"presentation_rect" : [ 346.0, 106.0, 75.0, 22.0 ],
					"style" : "",
					"text" : "foobar 1 2 3"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-5",
					"maxclass" : "newobj",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 22.0, 164.0, 134.0, 22.0 ],
					"presentation_rect" : [ 22.0, 164.0, 134.0, 22.0 ],
					"style" : "",
					"text" : "prepend drawElements"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-144",
					"linecount" : 5,
					"maxclass" : "comment",
					"numinlets" : 1,
					"numoutlets" : 0,
					"patching_rect" : [ 42.0, 13.0, 525.0, 74.0 ],
					"presentation_linecount" : 5,
					"presentation_rect" : [ 42.0, 13.0, 525.0, 74.0 ],
					"style" : "",
					"text" : "List format :\nglobal distance factor / autofocus  /  followed b 4 arguments per speaker:\n\n <x>    <y>   <rotation>   <color>\n-1..1  -1..1      0...360°      L=0 M=1 R=2"
				}

			}
, 			{
				"box" : 				{
					"id" : "obj-4",
					"maxclass" : "message",
					"numinlets" : 2,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"patching_rect" : [ 188.0, 110.0, 105.0, 22.0 ],
					"presentation_rect" : [ 188.0, 110.0, 105.0, 22.0 ],
					"style" : "",
					"text" : "24 0 0.5 -0.5 45 1"
				}

			}
, 			{
				"box" : 				{
					"filename" : "xypad",
					"id" : "obj-2",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 421.0, 158.0, 173.0, 173.0 ],
					"presentation_rect" : [ 421.0, 158.0, 173.0, 173.0 ]
				}

			}
, 			{
				"box" : 				{
					"filename" : "elements UI.js",
					"id" : "obj-1",
					"maxclass" : "jsui",
					"numinlets" : 1,
					"numoutlets" : 1,
					"outlettype" : [ "" ],
					"parameter_enable" : 0,
					"patching_rect" : [ 145.0, 218.0, 175.0, 175.0 ],
					"presentation_rect" : [ 145.0, 218.0, 175.0, 175.0 ]
				}

			}
 ],
		"lines" : [ 			{
				"patchline" : 				{
					"destination" : [ "obj-5", 0 ],
					"source" : [ "obj-11", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-4", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-5", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-7", 0 ]
				}

			}
, 			{
				"patchline" : 				{
					"destination" : [ "obj-1", 0 ],
					"source" : [ "obj-9", 0 ]
				}

			}
 ],
		"dependency_cache" : [ 			{
				"name" : "elements UI.js",
				"bootpath" : "~/Documents/Music Making/Ecstatic Dance",
				"patcherrelativepath" : ".",
				"type" : "TEXT",
				"implicit" : 1
			}
 ],
		"autosave" : 0,
		"styles" : [ 			{
				"name" : "stb001",
				"default" : 				{
					"fontface" : [ 1 ],
					"fontsize" : [ 10.0 ],
					"fontname" : [ "Arial Bold" ]
				}
,
				"parentstyle" : "",
				"multi" : 0
			}
 ]
	}

}
