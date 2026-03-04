"use client"
import * as React from "react"
import * as TogglePrimitive from "@radix-ui/react-toggle"
import { cn } from "../../lib/utils"

function Toggle({ className, ...props }: React.ComponentProps<typeof TogglePrimitive.Root>) {
  return <TogglePrimitive.Root className={cn("inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-none data-[state=on]:bg-accent data-[state=on]:text-accent-foreground", className)} {...props} />
}

export { Toggle }
