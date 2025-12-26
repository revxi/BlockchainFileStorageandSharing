import React from 'react'

export default function PermissionBadge({level='viewer'}){
  return <span className={`perm-badge perm-${level}`}>{level}</span>
}
