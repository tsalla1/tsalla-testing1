"use client"

import type React from "react"
import type { ReactNode } from "react"

interface ContentWrapperProps {
  children: ReactNode
  className?: string
}

const ContentWrapper: React.FC<ContentWrapperProps> = ({ children, className = "" }) => {
  return <div className={`w-full px-6 md:px-12 xl:px-24 max-w-[1440px] mx-auto ${className}`}>{children}</div>
}

// Adding both named and default exports to support different import styles
export { ContentWrapper }
export default ContentWrapper
