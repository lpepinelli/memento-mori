import React, { createContext, useState } from 'react'

interface PagesContextTypes {
  currentPage: number
  handlePageChange: (pageNumber: number) => void
}

const pagesContext = createContext({} as PagesContextTypes)

function PagesProvider ({ children }: { children?: React.ReactNode }) {
  const [currentPage, setCurrentPage] = useState(0)

  function handlePageChange (pageNumber: number) {
    setCurrentPage(pageNumber)
  }

  return (
    <pagesContext.Provider value={{ currentPage, handlePageChange }}>
      {children}
    </pagesContext.Provider>
  )
}

export { pagesContext, PagesProvider }
