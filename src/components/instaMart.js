import React, { useState } from 'react'


const Section = ({ isVisible, title, paragraph, SetIsVisible }) => {
    return (
        <div className='border-black border p-2 m-2'>
            <h2 className='font-bold text-2xl m-2'>{title}</h2>
            {
                isVisible ?
                    <button
                        className="cursor-pointer underline"
                        onClick={() => {
                            SetIsVisible(false)
                        }}>Hide</button>
                    :
                    <button
                        className="cursor-pointer underline"
                        onClick={() => {
                            SetIsVisible(true)
                        }}>Show</button>
            }
            {isVisible && <p>{paragraph}</p>}
        </div>
    )
}

const instaMart = () => {

    const [visibleSection, setIsVisibleSection] = useState("team")

    return (
        <div>
            <h1>Insta Mart</h1>

            <Section
                title="About InstaMart"
                paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti atque ipsum fuga commodi aperiam similique, iusto maiores animi reiciendis recusandae ad quo illo aliquam maxime error facere aut doloribus, pariatur id aliquid repellat labore! Assumenda fuga nam maxime rem repellat reprehenderit, numquam, ut cumque harum facilis laboriosam id optio illum. Ab molestiae, delectus sint cumque facere excepturi vero consequuntur dolorum quam labore placeat, hic aliquam. Voluptatibus, possimus? Expedita magni maiores veniam, soluta, quo earum beatae modi temporibus reiciendis ratione, similique sed? Nisi, maxime. Fuga aliquam nobis sit, ad, provident quisquam aspernatur rerum iste eveniet sequi ex delectus, suscipit beatae earum?"
                isVisible={visibleSection == "about"}
                SetIsVisible={(visible) => visible? setIsVisibleSection('about'):setIsVisibleSection("")}

            />
            <Section
                title="team InstaMart"
                paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti atque ipsum fuga commodi aperiam similique, iusto maiores animi reiciendis recusandae ad quo illo aliquam maxime error facere aut doloribus, pariatur id aliquid repellat labore! Assumenda fuga nam maxime rem repellat reprehenderit, numquam, ut cumque harum facilis laboriosam id optio illum. Ab molestiae, delectus sint cumque facere excepturi vero consequuntur dolorum quam labore placeat, hic aliquam. Voluptatibus, possimus? Expedita magni maiores veniam, soluta, quo earum beatae modi temporibus reiciendis ratione, similique sed? Nisi, maxime. Fuga aliquam nobis sit, ad, provident quisquam aspernatur rerum iste eveniet sequi ex delectus, suscipit beatae earum?"
                isVisible={visibleSection == "team"}
                SetIsVisible={(visible) => visible? setIsVisibleSection('team'):setIsVisibleSection("")}

            />
            <Section
                title="Career InstaMart"
                paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti atque ipsum fuga commodi aperiam similique, iusto maiores animi reiciendis recusandae ad quo illo aliquam maxime error facere aut doloribus, pariatur id aliquid repellat labore! Assumenda fuga nam maxime rem repellat reprehenderit, numquam, ut cumque harum facilis laboriosam id optio illum. Ab molestiae, delectus sint cumque facere excepturi vero consequuntur dolorum quam labore placeat, hic aliquam. Voluptatibus, possimus? Expedita magni maiores veniam, soluta, quo earum beatae modi temporibus reiciendis ratione, similique sed? Nisi, maxime. Fuga aliquam nobis sit, ad, provident quisquam aspernatur rerum iste eveniet sequi ex delectus, suscipit beatae earum?"
                isVisible={visibleSection == "career"}
                SetIsVisible={(visible) => visible? setIsVisibleSection('career'):setIsVisibleSection("")}

            />
        </div>
    )
}

export default instaMart