import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "./cn"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-indigo-600 text-white hover:bg-indigo-700",
        secondary: "bg-gray-200 text-gray-900 hover:bg-gray-300",
        outline: "border border-gray-300 bg-transparent hover:bg-gray-50",
        destructive: "bg-red-600 text-white hover:bg-red-700",
        ghost: "hover:bg-gray-100",
      },
      size: {
        sm: "h-9 px-3",
        default: "h-10 px-4",
        lg: "h-11 px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const classes = cn(buttonVariants({ variant, size }), className)

    if (asChild && React.isValidElement(children)) {
      const child = children as React.ReactElement<{ className?: string }>
      return React.cloneElement(child, {
        className: cn(classes, child.props.className),
      })
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = "Button"

export { Button, buttonVariants }
