#!/usr/bin/env python3
"""
Script to update all project pages with hardcoded images
"""
import os
import re
from pathlib import Path

# This script will be used to help update projects
# For now, we'll do them manually to ensure quality

projects_info = {
    '18th-ave': {'images': 9, 'name': '18th Ave'},
    '21st-street': {'images': 6, 'name': '21st Street'},
    '22nd-street': {'images': 57, 'name': '22nd Street'},
    'bartlett': {'images': 25, 'name': 'Bartlett'},
    'castro': {'images': 7, 'name': 'Castro'},
    'eichler': {'images': 18, 'name': 'Eichler'},
    'lincoln': {'images': 6, 'name': 'Lincoln'},
    'magic-morgan': {'images': 19, 'name': 'Magic Morgan'},
    'sierra-oaks': {'images': 41, 'name': 'Sierra Oaks'},
    'stone-canyon': {'images': 15, 'name': 'Stone Canyon'},
    'davids-tea': {'images': 2, 'name': "David's Tea TI"},
}

print("Projects to update:")
for proj, info in projects_info.items():
    print(f"  {proj}: {info['images']} images")

