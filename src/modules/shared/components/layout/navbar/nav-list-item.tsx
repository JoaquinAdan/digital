import { VISIBILITY, visibilityText } from '@/configs/constants/visibility'
import { cn } from '@/lib/utils'
import React from 'react'

type ListItemProps = {
  className?: string
  title?: string
  children?: React.ReactNode
  href?: string
  icon: React.ForwardRefExoticComponent<Omit<React.SVGProps<SVGSVGElement>, 'ref'>>
  visibility: keyof typeof VISIBILITY
}

const ListItem = React.forwardRef<React.ElementRef<'a'>, ListItemProps>(
  ({ className, title, children, icon, visibility, ...props }, ref) => {
    return (
      <li>
        <a
          ref={ref}
          className={cn(
            'select-none space-y-1 rounded-md p-1 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground flex gap-3 items-center',
            className
          )}
          {...props}
        >
          <div className='flex items-center justify-center rounded-lg bg-blue-100 h-10 w-10 p-2 '>
            {React.createElement(icon, {
              strokeWidth: 2,
              className: 'h-6 text-gray-900 w-6',
            })}
          </div>
          <div>
            <div className='w-full flex justify-between items-start'>
              <p className='text-sm text-gray-700 font-medium leading-none'>{title}</p>
              <p className='text-xs font-medium leading-none text-gray-400'>{visibilityText[visibility]}</p>
            </div>
            <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>{children}</p>
          </div>
        </a>
      </li>
    )
  }
)
ListItem.displayName = 'ListItem'

export default ListItem
