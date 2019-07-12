#!/bin/bash
set -e

# Re-set permission to the `ocl` user
# This avoids permission denied if the data volume is mounted by root
#chown -R ttd /lint
exec /usr/bin/remark
