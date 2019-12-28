/*
  Evolutility DB model for Objects
  https://github.com/evoluteur/evolutility-server-node
*/

module.exports = {
	"id": "object",
	"title": "Objects",
	"world": "designer",
	"pKey": "id",
	"table": "evol_object",
	"titleField": "title",
	"fields": [
		{
			"id": "title",
			"type": "text",
			"label": "Title",
			"required": true,
			"maxLength": 200,
			"inMany": true,
			"column": "title",
			"inSearch": true
		},
		{
			"id": "active",
			"type": "boolean",
			"label": "Active",
			"inMany": true,
			"column": "active"
		},
		{
			"id": "world",
			"type": "lov",
			"label": "World",
			"object": "world",
			"lovIcon": false,
			"inMany": true,
			"column": "world_id",
			"lovTable": "evol_world"
		},
		{
			"id": "noCharts",
			"type": "boolean",
			"label": "No Charts",
			"column": "nocharts"
		},
		{
			"id": "noStats",
			"type": "boolean",
			"label": "No Stats",
			"column": "nostats"
		},
		{
			"id": "table",
			"type": "text",
			"label": "DB Table name",
			"required": true,
			"maxLength": 63,
			"inMany": true,
			"column": "table",
			"inSearch": true
		},
		{
			"id": "pKey",
			"type": "text",
			"label": "Primary key column",
			"column": "pkey"
		},
		{
			"id": "entity",
			"type": "text",
			"label": "Object Id",
			"required": true,
			"maxLength": 100,
			"inMany": true,
			"column": "entity",
			"inSearch": true
		},
		{
			"id": "name",
			"type": "text",
			"label": "Object name (singular)",
			"required": true,
			"maxLength": 50,
			"inMany": true,
			"column": "name",
			"inSearch": true
		},
		{
			"id": "namePlural",
			"type": "text",
			"label": "name (plural)",
			"required": true,
			"maxLength": 50,
			"column": "nameplural"
		},
		{
			"id": "icon",
			"type": "image",
			"label": "Icon",
			"readOnly": true,
			"maxLength": "50",
			"inMany": true,
			"column": "icon"
		},
		{
			"id": "titleField",
			"type": "text",
			"label": "Title field",
			"column": "titlefield"
		},
		{
			"id": "description",
			"type": "textmultiline",
			"label": "Description",
			"maxLength": 250,
			"column": "description",
			"inSearch": true
		}
	],
	"collections": [
		{
			"id": "collec-fields",
			"table": "evol_field",
			"column": "object_id",
			"object": "field",
			"orderBy": "position, t1.id",
			"fields": [
				"fid",
				"label",
				"column",
				"type",
				"inMany",
				"inSearch",
				"required"
			]
		}
	]
}