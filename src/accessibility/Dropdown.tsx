import { KeyboardEvent, useCallback, useEffect, useRef, useState } from "react"

const Dropdown = () => {

    const [isOpen, setOpen] = useState<boolean>(false)
    const [focusedIndex, setFocusedIndex] = useState<number>(-1)
    const btnRef = useRef<HTMLButtonElement>(null)
    const menuRef = useRef<HTMLUListElement>(null)
    const items = ["Sozlamalar", "Profil", "Chiqish"]

    const toggleOpen = useCallback(() => {
        setOpen(prev => !prev)
    }, [isOpen])

    const handleKeyDown = (e: KeyboardEvent<HTMLButtonElement>) => {
        if (!isOpen) return

        if (e.key === "ArrowDown") {
            e.preventDefault()
            setFocusedIndex((prev) => (prev + 1) % items.length)
        } else if (e.key === "ArrowUp") {
            e.preventDefault()
            setFocusedIndex((prev) => (prev - 1 + items.length) % items.length)
        } else if (e.key === "Escape") {
            setOpen(false)
            btnRef.current?.focus()
        } else if (e.key === "Enter" && focusedIndex !== -1) {
            alert(`Tanlangan ${items[focusedIndex]}`)
            setOpen(false)
        }
    }

    window.addEventListener("click", () => {
        setOpen(false)
    })

    useEffect(() => {

        if (isOpen && focusedIndex !== -1) {
            const menuitems: any = menuRef.current?.querySelector("[role='menuitem']")

            menuitems?.[focusedIndex]?.focus()
        }
    }, [])

    return (
        <div
            className="position-relative d-inline-block text-start"
            onClick={(e) => e.stopPropagation()}
        >

            <button
                ref={btnRef}
                onClick={toggleOpen}
                onKeyDown={handleKeyDown}
                aria-haspopup='true'
                aria-expanded={isOpen}
                aria-controls="dropdown-menu"
                className="bg-primary text-white px-4 py-2 rounded"
            >
                Menu
            </button>

            {
                isOpen && (
                    <ul
                        id="dropdown-menu"
                        ref={menuRef}
                        role="menu"
                        aria-label="Dropdown menu"
                        className="position-absolute mt-2 bg-white border rounded shadow-lg p-2"
                    >
                        {
                            items.map((item) => (
                                <li key={item}>
                                    <button
                                        role="menuitem"
                                        tabIndex={-1}
                                        className="d-block px-4 py-2 bg-success table-hover btn btn-out-primary w-100 text-start"
                                        onClick={() => {
                                            alert(`Tanlandi: ${item}`)
                                            setOpen(false)
                                        }}
                                    >
                                        {item}
                                    </button>
                                </li>
                            ))
                        }
                    </ul>
                )
            }

        </div>
    )
}

export default Dropdown