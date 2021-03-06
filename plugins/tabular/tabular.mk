# This file is part of MLDB. Copyright 2015 mldb.ai inc. All rights reserved.

# Behavioral dataset plugin
LIBMLDB_TABULAR_PLUGIN_SOURCES:= \
	tabular_dataset.cc \
	frozen_column.cc \
	frozen_tables.cc \
	string_frozen_column.cc \
	column_types.cc \
	tabular_dataset_column.cc \
	tabular_dataset_chunk.cc \


LIBMLDB_TABULAR_PLUGIN_LINK := \
	block zstd sql_expression mldb_engine mldb_core


$(eval $(call library,mldb_tabular_plugin,$(LIBMLDB_TABULAR_PLUGIN_SOURCES),$(LIBMLDB_TABULAR_PLUGIN_LINK)))
