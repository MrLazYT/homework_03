import React from 'react'

export default function Bio()
{
    return (
        <div className="bio-container">
            <div className="short-info">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Pablo_picasso_1.jpg/280px-Pablo_picasso_1.jpg" alt='img'/>
            </div>

            <div className="long-info">
                <h1 className="bio-title">About Pablo Picasso</h1>
                
                <p className="bio-desc">
                    Pablo Ruiz Picasso (25 October 1881 – 8 April 1973) was a Spanish painter, sculptor, printmaker,
                    ceramicist, and theatre designer who spent most of his adult life in France. One of the most
                    influential artists of the 20th century, he is known for co-founding the Cubist movement, the
                    invention of constructed sculpture, the co-invention of collage, and for the wide variety of styles
                    that he helped develop and explore. Among his most famous works are the proto-Cubist Les
                    Demoiselles d'Avignon (1907) and the anti-war painting Guernica (1937), a dramatic portrayal of the
                    bombing of Guernica by German and Italian air forces during the Spanish Civil War. 
                </p>

                <p className="bio-desc">
                    Picasso demonstrated extraordinary artistic talent in his early years, painting in a naturalistic
                    manner through his childhood and adolescence. During the first decade of the 20th century, his
                    style changed as he experimented with different theories, techniques, and ideas. After 1906, the
                    Fauvist work of the older artist Henri Matisse motivated Picasso to explore more radical styles,
                    beginning a fruitful rivalry between the two artists, who subsequently were often paired by critics
                    as the leaders of modern art.
                </p>

                <p className="bio-desc">
                    Picasso's output, especially in his early career, is often periodized. While the names of many of
                    his later periods are debated, the most commonly accepted periods in his work are the Blue Period
                    (1901–1904), the Rose Period (1904–1906), the African-influenced Period (1907–1909), Analytic
                    Cubism (1909–1912), and Synthetic Cubism (1912–1919), also referred to as the Crystal period. Much
                    of Picasso's work of the late 1910s and early 1920s is in a neoclassical style, and his work in the
                    mid-1920s often has characteristics of Surrealism. His later work often combines elements of his
                    earlier styles. 
                </p>

                <p className="bio-desc">
                    Exceptionally prolific throughout the course of his long life, Picasso achieved universal renown
                    and immense fortune for his revolutionary artistic accomplishments, and became one of the
                    best-known figures in 20th-century art. 
                </p>
            </div>
        </div>
    );
}