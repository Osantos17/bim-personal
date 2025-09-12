

function PlugIn () {

  return(
    <div className="PlugIn">
      <div className='text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-2 md:mb-5 lg:mb-10'>
        PyRevit Extension
      </div>
      <div className="flex justify-evenly items-center">
        <img
          src="/images/PlugIn.png"
          alt="PlugIn"
          className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
        />
      </div>
      <div>
        <div className="text-xs text-white text-center mt-4 mx-3 md:text-xl md:mx-8 lg:mt-5 lg:mx-16 lg:text-2xl lg:leading-relaxed">
        I developed a custom Revit plugin using IronPython and pyRevit by integrating a variety of useful scripts from pyRevit and its extensions, along with several custom tools I built to match our office’s specific workflows. The result was a streamlined toolset that significantly improved day-to-day efficiency. I'm excited to continue applying and growing these skills to drive even greater impact in the office and beyond.
        </div>
      </div>
      <div className="AllowableOpenings mt-6">
        <div className="text-white underline text-center text-lg md:text-2xl lg:text-5xl mb-2 md:mb-5 lg:mb-10">
          Allowable Openings
        </div>
        <div className="flex justify-evenly items-center">
        <img
          src="/images/AllowableOpenings.png"
          alt="PlugIn"
          className="max-h-auto max-w-auto lg:max-h-170 lg:max-w-170"
        />
      </div>
      <div>
        <div className="text-xs text-white text-center mt-4 mx-3 md:text-xl md:mx-8 lg:mt-5 lg:mx-16 lg:text-2xl lg:leading-relaxed">
        One of the custom tools I developed integrates with a smart Detail Item Tag to address quality control issues. Previously, design changes often led to errors when manually updated areas were overlooked. The Update Areas tool I created populates a shared parameter with the area value from the Filled Region, which then automatically updates the tag. This workflow applies specifically to Filled Regions that contain Allowable Openings. In addition, I created area tags for all opening types and a Tag Sum feature, which allows you to select multiple tags, calculates the total, and automatically copies the result for easy pasting. By automating these processes, the tool eliminated tedious manual tasks and significantly improved quality assurance.
        </div>
      </div>
      </div>
    </div>
  )
}

export default PlugIn;