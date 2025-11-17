import React from "react"

declare module "@radix-ui/react-slot" {
  export const Slot: React.ForwardRefExoticComponent<
    React.PropsWithoutRef<React.HTMLAttributes<HTMLElement> & { children?: React.ReactNode }> &
      React.RefAttributes<HTMLElement>
  >
}
