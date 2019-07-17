#!/bin/bash
set -e

# Re-set permission to the `ocl` user
# This avoids permission denied if the data volume is mounted by root
chown -R ttd /srv
exec su-exec ocl /usr/local/bin/linkcheck -c '200,301,302' -e 'md' -t 5 /srv/test
