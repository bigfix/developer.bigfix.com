window.repositoryObject = {"columns_custom_fields":[],"relations_custom_fields":[],"unique_keys_custom_fields":[],"triggers_custom_fields":[],"object_id":"t4808","name":"dbo.datasource_groups","subtype":"SYSTEM_VERSIONED_TABLE","is_user_defined":false,"description":"<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\">\r\n<html xmlns=\"http://www.w3.org/1999/xhtml\">\r\n\t<head>\r\n\t\t<meta http-equiv=\"Content-Type\" content=\"text/html; charset=utf-8\" /><title>\r\n\t\t</title>\r\n\t\t<style type=\"text/css\">\r\n\t\t\t.cs2654AE3A{text-align:left;text-indent:0pt;margin:0pt 0pt 0pt 0pt}\r\n\t\t\t.cs416E45A4{color:#000000;background-color:transparent;font-family:'Segoe UI';font-size:10pt;font-weight:normal;font-style:normal;}\r\n\t\t</style>\r\n\t</head>\r\n\t<body>\r\n\t\t<p class=\"cs2654AE3A\"><span class=\"cs416E45A4\">Has a listing of all datasources computer groups. Think of this as flattened content results that is not linked. There is no global representation within this table.</span></p></body>\r\n</html>\r\n","summary":[{"field":"Documentation","value":{"_type":"link","name":"Insights/IVR Repository","id":"d1007"}},{"field":"Schema","value":"dbo"},{"field":"Name","value":"datasource_groups"},{"field":"Type","value":"System-versioned table"},{"field":"Module","value":[{"_type":"link","name":"Insights Sample Reports","id":"m1102"},{"_type":"link","name":"Datasource Computer Reporting","id":"m1104"}]}],"columns":[{"id":"column-36083","object_id":"column-36083","name":"id","name_without_path":"id","description":"The unique identifier of the group in Insights.","is_pk":true,"is_identity":true,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36084","object_id":"column-36084","name":"datasource_id","name_without_path":"datasource_id","description":"The id of the datasource which the group is retrieved from.","is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36085","object_id":"column-36085","name":"datasource_site_id","name_without_path":"datasource_site_id","description":"The site id of the group in the datasource.","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[{"id":"t4811","name":"dbo.datasource_sites","name_show_schema":"dbo.datasource_sites"}]},{"id":"column-36086","object_id":"column-36086","name":"remote_id","name_without_path":"remote_id","description":"The id of the group in the datasource","is_pk":false,"is_identity":false,"data_type":"bigint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36087","object_id":"column-36087","name":"name","name_without_path":"name","description":"The name of the group.","is_pk":false,"is_identity":false,"data_type":"nvarchar","data_length":"512","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36088","object_id":"column-36088","name":"type","name_without_path":"type","description":"The group type","is_pk":false,"is_identity":false,"data_type":"tinyint","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36089","object_id":"column-36089","name":"is_client_evaluated","name_without_path":"is_client_evaluated","description":"Whether the client evaluates that it is a member of this group","is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36090","object_id":"column-36090","name":"creator_id","name_without_path":"creator_id","description":"The id of the user that created the group.","is_pk":false,"is_identity":false,"data_type":"int","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36091","object_id":"column-36091","name":"creation_time","name_without_path":"creation_time","description":"The creation time of the group. In UTC.","is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"0","is_nullable":true,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36092","object_id":"column-36092","name":"deleted","name_without_path":"deleted","description":"Whether the group has been deleted or not","is_pk":false,"is_identity":false,"data_type":"bit","data_length":null,"is_nullable":false,"computed_formula":null,"default_value":"0","path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36093","object_id":"column-36093","name":"valid_from","name_without_path":"valid_from","description":"The timestamp of the last ETL.","is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]},{"id":"column-36094","object_id":"column-36094","name":"valid_to","name_without_path":"valid_to","description":"The timestamp indicating until when this row is valid.","is_pk":false,"is_identity":false,"data_type":"datetime2","data_length":"0","is_nullable":false,"computed_formula":null,"default_value":null,"path":null,"level":1,"item_type":"COLUMN","is_user_defined":false,"custom_fields":{},"linked_terms":null,"references":[]}],"relations":[{"name":"FK_cc387bd32f7006f9daa3290c8dd","title":null,"description":null,"is_user_defined":false,"foreign_table":"dbo.datasource_groups","foreign_table_show_schema":"dbo.datasource_groups","foreign_table_verbose":"dbo.datasource_groups","foreign_table_verbose_show_schema":"dbo.datasource_groups","foreign_table_object_id":"t4808","primary_table":"dbo.datasource_sites","primary_table_show_schema":"dbo.datasource_sites","primary_table_verbose":"dbo.datasource_sites","primary_table_verbose_show_schema":"dbo.datasource_sites","primary_table_object_id":"t4811","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"datasource_site_id"}],"custom_fields":{}},{"name":"FK_532369e84b79525ee717b6a66f0","title":null,"description":null,"is_user_defined":false,"foreign_table":"dbo.datasource_computer_groups","foreign_table_show_schema":"dbo.datasource_computer_groups","foreign_table_verbose":"dbo.datasource_computer_groups","foreign_table_verbose_show_schema":"dbo.datasource_computer_groups","foreign_table_object_id":"t4805","primary_table":"dbo.datasource_groups","primary_table_show_schema":"dbo.datasource_groups","primary_table_verbose":"dbo.datasource_groups","primary_table_verbose_show_schema":"dbo.datasource_groups","primary_table_object_id":"t4808","pk_cardinality":"1x","fk_cardinality":"mx","constraints":[{"primary_column_path":null,"primary_column":"id","foreign_column_path":null,"foreign_column":"datasource_group_id"}],"custom_fields":{}}],"unique_keys":[{"name":"PK_0c6e12ec7478319a16d064aaaa9","description":null,"is_pk":true,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"id","name":"id"}],"custom_fields":{}},{"name":"datasource_groups_etl_idx","description":null,"is_pk":false,"is_user_defined":false,"columns":[{"path":null,"name_without_path":"remote_id","name":"remote_id"},{"path":null,"name_without_path":"datasource_id","name":"datasource_id"},{"path":null,"name_without_path":"datasource_site_id","name":"datasource_site_id"}],"custom_fields":{}}],"triggers":null,"dependencies":null,"imported_at":"2021-02-22 11:56"};