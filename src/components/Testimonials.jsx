

const testimonials =[
    {
    name: "Marcus Rodriguez",
    role: "Tech Lead",
    image: "https://i.pravatar.cc/150?img=11",
    content: "The platform gives our team everything we need in one place. It's fast, intuitive, and has made collaboration much easier."
},
    {
    name: "Sarah Mitchell",
    role: "Senior Developer",
    image: "https://i.pravatar.cc/150?img=47",
    content: "This platform has completely changed the way our team works. The interface is clean, fast, and incredibly easy to use."
},

{
    name: "Daniel Carter",
    role: "Product Manager",
    image: "https://i.pravatar.cc/150?img=12",
    content: "I love how simple everything feels. We were able to get our whole team onboarded in just a few minutes."
},

{
    name: "Emily Johnson",
    role: "UX Designer",
    image: "https://i.pravatar.cc/150?img=32",
    content: "The design is beautiful and the features are actually useful. It has made our daily workflow much more efficient."
}
]


export default function Testimonials(){
    return <section id="testimonials" className="py-16 sm:py-20 px-10 sm:px-6 lg:px-8 relative" >

<div className="max-w-7xl mx-auto ">
<div className="flex flex-col lg:flex-row items-start gap-8 sm:gap-12 lg:gap-16">
{/* left side headerr */}
<div className="lg:w-1/2 w-full text-center lg:text-left">

    <h2 className="text-5xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
What developers are saying about us

    </h2>

    <p className="text-gray-400 text-base text-xl sm:text-lg max-w-2xl mx-aotu">
        Everything you need to build, test, and deploy applications with AI-powerd development tools.

    </p>

     </div>
     {/* right side */}
     <div className="lg:w-1/2 w-full">
     
     <div className="space-y-6 sm:sspace-y-8">
{testimonials.map((testimonial, key) => {
    return(
    <div key={key} className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl sm:rounded-2xl">
        <div className="flex items-start space-x-3 sm:space-x-4">
            <div className="flex-shrink-0">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">"</div>
            </div>
            <div className="flex-grow">
<p className="text-white text-base sm:text-lg leading-relaxed mb-3 sm:mb-4">{testimonial.content}</p>
<div className="felx items-center space-x-2 sm:space-x-3">
    <img src={testimonial.image} alt={testimonial.name} className="w-10 h-10 sm:w-12 sm:h-12 rounded-full object-cover"/>
    <div>
        <h4 className="font-semibold text-white text-sm sm:text-base">
            {testimonial.name}</h4>
        <p className="text-xs sm:text-sm text-gray-400">
            {testimonial.role}</p>
    </div>
</div>
            </div>
        </div>
    </div>
)})}
     </div>
       </div>
     </div>
   </div>
</section>
}