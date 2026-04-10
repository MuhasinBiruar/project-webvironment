import { Link } from 'react-router';
import { Image } from 'primereact/image';
import img1 from '~/images/Blog/scale.png'; 

export function meta() {
    return [
        { title: 'Why We Can\'t Just Plant More Trees - WebVironment' },
        {
            name: 'description',
            content: 'Understanding the true mathematical scale of climate change and carbon sinks.',
        },
    ];
}

export default function ScaleOfClimateChangePage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50">
            <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white p-8 shadow-lg">
                <Link
                    to="/"
                    className="inline-block mb-4 text-green-100 hover:text-white transition"
                >
                    ← Back to Calendar
                </Link>
                <h1 className="text-4xl font-bold mb-2">Why We Can't Just "Plant More Trees"</h1>
                <p className="text-xl text-green-100">Understanding the true mathematical scale of climate change and carbon sinks.</p>
            </div>

            <div className="max-w-5xl mx-auto p-8">
                {/* SECTION 1 */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">The Staggering Scale of Our Emissions</h2>
                    <p className="text-gray-800 mb-4">
                        A common question surrounding climate change is: <em>"CO2 is good for plants, so won't they just grow more? Why can't we just plant more trees to fix the problem?"</em> While the logic seems sound on the surface, the underlying flaw is a failure to comprehend the sheer, astronomical scale of the numbers involved.
                    </p>
                    <p className="text-gray-800 mb-4">
                        To understand this, we have to look back at the Carboniferous period. During a 60-million-year span, massive ancient forests expanded and were buried before they could decompose. This trapped immense amounts of carbon underground. This process actually triggered a global ice age. Today, humanity has burned through roughly half of all that ancient sequestered coal. We have taken carbon that required 30 million years of Earth's most productive periods to store, and we dumped it back into the atmosphere in just 150 years. The vast majority of this was burned in just the last 40 years.
                    </p>
                    <p className="text-gray-800 mb-4">
                        Because fossil fuels are measured in confusing and mixed units like barrels of oil or millions of tons of coal, it is best to convert them all into a single metric: <strong>Gigatons of Carbon</strong>. 
                    </p>
                    <figure className="flex flex-col items-center mb-6 mt-6">
                        <Image
                            src={img1}
                            className="hover:brightness-50 transition-all cursor-pointer rounded-lg"
                            width="900"
                            preview
                        />
                        <figcaption className="text-sm text-gray-600 mt-3">Visualizing the scale of carbon emissions requires looking at the raw math.</figcaption>
                    </figure>
                    <p className="text-gray-800 mb-4">
                        One gigaton is equal to 1 trillion kilograms. To put that into perspective, the Great Pyramid of Giza weighs about 6 million tons, which is only 0.006 gigatons. In a single recent year, coal mining alone extracted 6.8 gigatons of carbon. That amount represents the physical equivalent of over 1,000 Great Pyramids.
                    </p>
                </div>

                {/* SECTION 2 */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Humans vs. Nature</h2>
                    <p className="text-gray-800 mb-4">
                        How does human output compare to natural carbon sources? In 2021, a record year for global wildfires, fires produced about 0.5 gigatons of carbon. Global volcanoes, which are relatively consistent, contributed about 0.12 gigatons. 
                    </p>
                    <p className="text-gray-800 mb-4">
                        In contrast, annual human carbon production sits at roughly <strong>14 gigatons</strong>. This means human output is 23 times greater than all global fires and volcanoes combined. We have become the dominant geological force on the planet.
                    </p>
                    <p className="text-gray-800 mb-4">
                        Cumulatively, since the industrial revolution, humanity has added over 500 gigatons of carbon to the atmosphere. Pre-industrial atmospheric carbon totaled about 600 gigatons, meaning we have nearly doubled the original amount of carbon in the sky. Interestingly, the atmosphere currently holds only about 900 gigatons. The missing 200 gigatons dissolved into the shallow oceans. This process is rapidly increasing ocean acidity and directly threatening marine life.
                    </p>
                </div>

                {/* SECTION 3 */}
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">The "Tree Math" Problem</h2>
                    <p className="text-gray-800 mb-4">
                        So, why not just plant more trees to absorb that 500 gigatons? This is where the ratios truly reveal the problem. 
                    </p>
                    <p className="text-gray-800 mb-4">
                        If we calculate the total mass of every single living plant on Earth, from the smallest blades of grass to the massive trees of the Amazon, it adds up to roughly <strong>450 gigatons of carbon</strong>. 
                    </p>
                    <p className="text-gray-800 mb-4">
                        Because humanity has released 500 gigatons of carbon, we would have to more than <strong>double the total amount of plant life on the entire planet</strong> just to get back to where we started. Even if we had the physical space to plant that many trees, the Earth lacks the necessary base nutrients (like nitrogen) in the soil to support a sudden doubling of global biomass. CO2 is rarely the actual bottleneck for plant growth.
                    </p>
                    <p className="text-gray-800 mb-4">
                        Furthermore, trees take time. Most carbon in a mature tree is stored in the dead "heartwood" at its center, which takes decades to grow. Even if we magically planted enough trees today, and they somehow survived without exhausting soil nutrients, it would take roughly 40 years for them to mature. During those 40 years, at our current emission rates, humanity would pump another 560 gigatons of carbon into the atmosphere, completely erasing the benefit of the new forests.
                    </p>
                    <p className="text-gray-800 mb-0">
                        Planting trees is absolutely helpful, but the math proves it cannot solve the crisis alone. The only mathematically viable solution is to stop emitting such astronomical volumes of carbon at the source.
                    </p>
                </div>
            </div>
        </div>
    );
}