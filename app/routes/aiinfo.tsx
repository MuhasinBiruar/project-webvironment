
import { Link } from 'react-router';
import { Image } from 'primereact/image';
import img1 from '~/images/Blog/1.jpg';
import img2 from '~/images/Blog/2.jpg';
export function meta() {
    return [
        { title: 'How AI Impacts Our Environment - WebVironment' },
        {
            name: 'description',
            content: 'Learn about AI\'s environmental impact',
        },
    ];
}
const link = "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fblogs.microsoft.com%2Fblog%2F2025%2F09%2F18%2Finside-the-worlds-most-powerful-ai-datacenter%2F&ved=0CBkQjhxqFwoTCLio5qnA4JMDFQAAAAAdAAAAABAI&opi=89978449";
const link2 = "https://www.google.com/url?sa=t&source=web&rct=j&url=https%3A%2F%2Fwww.investopedia.com%2Fhow-data-centers-are-draining-water-resources-11738978&opi=89978449"
const link3 = "https://www.microsoft.com/en-us/microsoft-cloud/blog/2024/12/09/sustainable-by-design-next-generation-datacenters-consume-zero-water-for-cooling/"
export default function AIInfoPage() {
    return (
        <div className="min-h-screen bg-linear-to-br from-green-50 to-emerald-50">
            <div className="bg-linear-to-r from-green-600 to-emerald-600 text-white p-8 shadow-lg">
                <Link
                    to="/"
                    className="inline-block mb-4 text-green-100 hover:text-white transition"
                >
                    ← Back to Calendar
                </Link>
                <h1 className="text-4xl font-bold mb-2">How AI Impacts Our Environment</h1>
                <p className="text-xl text-green-100">Understanding the relationship between artificial intelligence and sustainability</p>
            </div>

            <div className="max-w-5xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Introduction</h2>
                    <p className="text-gray-800 mb-4">
                        The 21st century has seen many changes, especially in the field of Artificial Intelligence (AI).
                        It has no doubt sparked a lot of controversy in areas of ethics, economy, and environment. Furthermore, as AI becomes more prevalent, more AI data centers are being built to consume the power needed to handle the number of users using it daily.
                        There are a lot of consequences when it comes to AI data centers, especially when we talk about the environment.
                    </p>
                    <p className="text-gray-800 mb-4">
                        According to Jonker and Gomstyn (2025), an AI data center is an establishment that
                        stores IT infrastructure and trains, deploys, and delivers AI applications and models. The difference against traditional data centers is large in computational power and other IT infrastructure capabilities. Moreover, servers, storage, and networking equipment are present in both data centers,
                        and AI-ready infrastructure designs are typically focused more on the cloud, AI, and machine learning activities.
                    </p>
                    <figure className="flex flex-col items-center mb-4">
                        <Image
                            src={img1}
                            className="hover:brightness-50 transition-all cursor-pointer"
                            width="400"
                            preview
                        />
                        <figcaption className="text-sm text-gray-600 mt-3"><a href={link} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Inside the World's Most Powerful AI Data Center</a></figcaption>
                    </figure>
                    <p className="text-gray-800 mb-4">
                        In order to advance AI further, AI data centers are needed to be built in order to handle these large sets of data.
                        Data center electricity demand is projected to rise by 165% by 2030, with global capacity expected to grow from 60 GW to over
                        170 GW (IEA, 2025). With this, AI data centers are generating heat at a high rate and therefore use large amounts of water to cool them. Huge data centers consume approximately 5 million gallons per day, which would be equal to the amount of water used by 10,000 to 50,000 people (Yañez-Barnuevo, 2025).
                        AI data centers using a large amount of water prove to be a problem that all of the people should worry about.
                    </p>

                </div>
            </div>
            <div className="max-w-5xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">Background of the Problem</h2>
                    <p className="text-gray-800 mb-4">
                        One of the biggest problems with AI data centers that use large amounts of water is that they can exacerbate existing problems,
                        such as water scarcity. Additionally, training Gemini (a large language model (LLM) from Google) alone used approximately
                        1 million liters of water per training cycle, depending on region-specific cooling configurations. Moreover, GPT-3
                        (a past version of the LLM from OpenAI) used around 1287 MWh of electricity during a single training cycle (Herrera et al., 2025).
                        This shows that AI's footprint is already significant and continues to grow each year (Leon, 2024).
                    </p>
                    <figure className="flex flex-col items-center mb-4">
                        <Image
                            src={img2}
                            className="hover:brightness-50 transition-all cursor-pointer"
                            width="400"
                            preview
                        />
                        <figcaption className="text-sm text-gray-600 mt-3"><a href={link2} target="_blank" rel="noopener noreferrer" className="hover:text-blue-600">Credit: Pierre Moutot and Christophe Thalabot/AFP via Getty Images</a></figcaption>
                    </figure>
                    <p className="text-gray-800 mb-4">
                        The water use of AI data centers also contributes to water quality degradation, as they can concentrate dust and
                        minerals after use, requiring wastewater treatment or disposal and potentially contributing to pollution (Yañez-Barnuevo, 2025).
                        AI data centers diminish water resources through substantial cooling-related consumption—up to 5 million gallons per day—and by
                        releasing contaminated effluent. Furthermore, elevated consumption poses a significant
                        threat to local water resources, disproportionately impacting domestic populations and agricultural activities (Tittel, 2026).
                    </p>
                </div>
            </div>

            <div className="max-w-5xl mx-auto p-8">
                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">How to Achieve Sustainability</h2>
                    <p className="text-gray-800 mb-4">
                        It is clear that AI is here to stay; removing it is not an option. However, employing sustainable strategies can 
                        help mitigate the dangers posed by AI data centers. One move suggests efficiency of both energy and resources. Efficient strategies reduce emissions and reduce costs, 
                        thereby reducing water consumption (How to Make AI Data Centres More Sustainable, 2026). 
                    </p>
                    <p className="text-gray-800 mb-4">
                        Another is to employ new renewable technologies. Large-scale battery energy storage systems (BESS) represent innovations 
                        that enable reliable power delivery from renewable sources. These systems achieve this by integrating renewable generation 
                        with consistent AI workloads. In addition to this, hybrid renewable energy sources are also viewed as a potential power source for 
                        these data centers. Pairing solar with wind power yields more consistent energy; wind output often rises as solar drops in the 
                        evening. Advanced energy management systems dynamically 
                        optimize this mix based on availability and demand (De Hoop Scheffer – Senior Director Data Center Energy Lead, 2025).  
                    </p>
                    <p className="text-gray-800 mb-4">
                        Another way is to continue the development of smarter chips and AI. For instance, Nvidia's superchip can boost performance and 
                        perform AI computations while consuming up to 25 times less energy. Tests suggest that AI tasks were faster and needed far less 
                        electricity. Optimizing AI operations by designing smaller, task-specific models. This approach effectively reduced unnecessary 
                        computations, enabling lower power consumption without sacrificing accuracy or speed. According to Evans and Gao (2026), Google's 
                        DeepMind AI has achieved significant energy efficiency improvements in data centers by using machine learning to optimize 
                        environmental controls. By proactively adjusting cooling and window settings in real time to maintain continuous, precise temperature 
                        control, 
                        the system has reduced cooling energy consumption by up to 40 percent, underscoring AI's potential for sustainable operations.
                    </p>
                    <p>Today, closed loops are being implemented to further enhance the efficiency and sustainability of AI data centers. Learn more: <a href={link3} target="_blank" rel="noopener noreferrer" className=" hover:text-blue-800 underline">Microsoft Blog: Sustainable by Design</a></p>
                </div>

                <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                    <h2 className="text-2xl font-bold text-green-800 mb-4">References</h2>
                    <ul className="space-y-4 list-none list-inside text-gray-800">
                        <li>
                            De Hoop Scheffer – Senior Director Data Center Energy Lead, W. (2025, November 25). Renewable energy for AI data centers: A complete guide. Hanwha Data Centers. <a href="https://www.hanwhadatacenters.com/blog/renewable-energy-for-ai-data-centers-a-complete-guide/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.hanwhadatacenters.com/blog/renewable-energy-for-ai-data-centers-a-complete-guide/</a>
                        </li>
                        <li>
                            Evans, R., & Gao, J. (2026, March 11). DeepMind AI reduces Google data centre cooling bill by 40%. Google DeepMind. <a href="https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://deepmind.google/blog/deepmind-ai-reduces-google-data-centre-cooling-bill-by-40/</a>
                        </li>
                        <li>
                            Herrera, M., Xie, X., Menapace, A., Zanfei, A., & Brentan, B. M. (2025). Sustainable AI infrastructure: A scenario-based forecast of water footprint under uncertainty. Journal of Cleaner Production, 526, 146528. <a href="https://doi.org/10.1016/j.jclepro.2025.146528" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://doi.org/10.1016/j.jclepro.2025.146528</a>
                        </li>
                        <li>
                            IEA (2025), Energy and AI, IEA, Paris <a href="https://www.iea.org/reports/energy-and-ai" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.iea.org/reports/energy-and-ai</a>, Licence: CC BY 4.0
                        </li>
                        <li>
                            How to make AI data centres more sustainable. (2026, January 26). UN Environment Programme. <a href="https://www.unep.org/technical-highlight/how-make-ai-data-centres-more-sustainable" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.unep.org/technical-highlight/how-make-ai-data-centres-more-sustainable</a>
                        </li>
                        <li>
                            Jonker, A., & Gomstyn, A. (2025, November 17). AI data center. What is an AI data center? <a href="https://www.ibm.com/think/topics/ai-data-center" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.ibm.com/think/topics/ai-data-center</a>
                        </li>
                        <li>
                            Kumar, S. (2025, September 28). 7 Ways to Reduce AI data center power & water use by 40%. Medium. <a href="https://medium.com/@meisshaily/7-ways-to-reduce-ai-data-center-power-water-use-by-40-d8fb6c80697e" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://medium.com/@meisshaily/7-ways-to-reduce-ai-data-center-power-water-use-by-40-d8fb6c80697e</a>
                        </li>
                        <li>
                            Leon, M. (2024). The escalating AI's energy demands and the imperative need for sustainable solutions. <a href="https://www.sciencedirect.com/science/article/pii/S0959652625018785#bb40" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.sciencedirect.com/science/article/pii/S0959652625018785#bb40</a>
                        </li>
                        <li>
                            Tittel, J. (2026, March 15). The AI data center boom is the next environmental crisis and it's already starting • The Jersey. The Jersey Vindicator. <a href="https://jerseyvindicator.org/2026/03/15/the-ai-data-center-boom-is-the-next-environmental-crisis-and-its-already-starting/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://jerseyvindicator.org/2026/03/15/the-ai-data-center-boom-is-the-next-environmental-crisis-and-its-already-starting/</a>
                        </li>
                        <li>
                            Yañez-Barnuevo, M. (2025, June 25). Data centers and water consumption. <a href="https://www.eesi.org/articles/view/data-centers-and-water-consumption" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 underline">https://www.eesi.org/articles/view/data-centers-and-water-consumption</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}