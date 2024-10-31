import React, { useState } from 'react'


const Section = ({ isVisible, title, paragraph, SetIsVisible }) => {
    return (
        <div className='border-black border p-2 m-2'>
            <h2 className='font-bold text-2xl m-2'>{title}</h2>
            {!isVisible ? <button
                className="cursor-pointer underline"
                onClick={() => {
                    SetIsVisible(false)
                }}>show</button> : <button
                    className="cursor-pointer underline"
                    onClick={() => {
                        SetIsVisible(true)
                    }}>Hide</button>}
            {isVisible && <p>{paragraph}</p>}
        </div>
    )
}

const instaMart = () => {

    const [sectionConfig, setSectionConfig] = useState({
        aboutInstaMart: false,
        teamInstaMart: true,
        careerInstaMart: false,
    })

    return (
        <div>
            <h1>Insta Mart</h1>

            <Section
                title="About InstaMart"
                paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti atque ipsum fuga commodi aperiam similique, iusto maiores animi reiciendis recusandae ad quo illo aliquam maxime error facere aut doloribus, pariatur id aliquid repellat labore! Assumenda fuga nam maxime rem repellat reprehenderit, numquam, ut cumque harum facilis laboriosam id optio illum. Ab molestiae, delectus sint cumque facere excepturi vero consequuntur dolorum quam labore placeat, hic aliquam. Voluptatibus, possimus? Expedita magni maiores veniam, soluta, quo earum beatae modi temporibus reiciendis ratione, similique sed? Nisi, maxime. Fuga aliquam nobis sit, ad, provident quisquam aspernatur rerum iste eveniet sequi ex delectus, suscipit beatae earum?"
                isVisible={sectionConfig.aboutInstaMart}
                SetIsVisible={() => setSectionConfig({
                    aboutInstaMart: true,
                    teamInstaMart: false,
                    careerInstaMart: false,
                })

                }

            />
            <Section
                title="team InstaMart"
                paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti atque ipsum fuga commodi aperiam similique, iusto maiores animi reiciendis recusandae ad quo illo aliquam maxime error facere aut doloribus, pariatur id aliquid repellat labore! Assumenda fuga nam maxime rem repellat reprehenderit, numquam, ut cumque harum facilis laboriosam id optio illum. Ab molestiae, delectus sint cumque facere excepturi vero consequuntur dolorum quam labore placeat, hic aliquam. Voluptatibus, possimus? Expedita magni maiores veniam, soluta, quo earum beatae modi temporibus reiciendis ratione, similique sed? Nisi, maxime. Fuga aliquam nobis sit, ad, provident quisquam aspernatur rerum iste eveniet sequi ex delectus, suscipit beatae earum?"
                isVisible={sectionConfig.teamInstaMart}
                SetIsVisible={() => setSectionConfig({
                    aboutInstaMart: false,
                    teamInstaMart: true,
                    careerInstaMart: false,
                })

                }

            />
            <Section
                title="Career InstaMart"
                paragraph="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti atque ipsum fuga commodi aperiam similique, iusto maiores animi reiciendis recusandae ad quo illo aliquam maxime error facere aut doloribus, pariatur id aliquid repellat labore! Assumenda fuga nam maxime rem repellat reprehenderit, numquam, ut cumque harum facilis laboriosam id optio illum. Ab molestiae, delectus sint cumque facere excepturi vero consequuntur dolorum quam labore placeat, hic aliquam. Voluptatibus, possimus? Expedita magni maiores veniam, soluta, quo earum beatae modi temporibus reiciendis ratione, similique sed? Nisi, maxime. Fuga aliquam nobis sit, ad, provident quisquam aspernatur rerum iste eveniet sequi ex delectus, suscipit beatae earum?"
                isVisible={sectionConfig.careerInstaMart}
                SetIsVisible={() => setSectionConfig({
                    aboutInstaMart: false,
                    teamInstaMart: false,
                    careerInstaMart: true,
                })

                }

            />
        </div>
    )
}

export default instaMart