export const ALLOWED_DATA_SOURCES = process.env.ALLOWED_DATA_SOURCES?.split(',') || ['server','device']
export const DEFAULT_DATA_SOURCE = process.env.DEFAULT_DATA_SOURCE || 'server'
export const DATA_SOURCE_URL = process.env.DATA_SOURCE_URL || 'http://127.0.0.1:3000/'
