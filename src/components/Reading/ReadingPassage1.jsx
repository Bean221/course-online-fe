// src/components/Reading/ReadingPassage1.jsx
import React from 'react';

const ReadingPassage1 = ({ answers, onAnswerChange }) => {
  return (
    <div className="reading-passage">
      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 1</h2>
      <div className="mb-4">
        <p className="text-gray-600 font-semibold">
          You should spend about 20 minutes on Questions 1-13 which are based on Reading Passage 1 below.
        </p>
      </div>
      <div className="passage-content mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold mb-4">Andrea Palladio. Italian architect</h3>
        <h4 className="text-base font-semibold mb-2 italic">A new exhibition celebrates Palladio's architecture 500 years on</h4>
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-1">A</p>
            <p>
              Vicenza is a pleasant, prosperous city in the Veneto, 60km west of Venice. Its grand
              families settled and farmed the area from the 16th century. But its principal claim to
              fame is Andrea Palladio, who is such an influential architect that a neoclassical style is
              known as Palladian. The city is a permanent exhibition of some of his finest buildings,
              and as he was born – in Padua, to be precise – 500 years ago, the International Centre
              for the Study of Palladio's Architecture has an excellent excuse for mounting la grande
              mostra, the big show.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">B</p>
            <p>
              The exhibition has the special advantage of being held in one of Palladio's buildings,
              Palazzo Barbaran da Porto. Its bold façade is a mixture of rustication and decoration set
              between two rows of elegant columns. On the second floor the pediments are
              alternately curved or pointed, a Palladian trademark. The harmonious proportions of
              the atrium at the entrance lead through to a dramatic interior of fine fireplaces and
              painted ceilings. Palladio's design is simple, clear and not over-crowded. The show has
              been organised on the same principles, according to Howard Burns, the architectural
              historian who co-curated it.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">C</p>
            <p>
              Palladio's father was a miller who settled in Vicenza, where the young Andrea was
              apprenticed to a skilled stonemason. How did a humble miller's son become a world
              renowned architect? The answer in the exhibition is that, as a young man, Palladio
              excelled at carving decorative stonework on columns, doorways and fireplaces. He was
              plainly intelligent, and lucky enough to come across a rich patron, Gian Giorgio Trissino,
              a landowner and scholar, who organised his education, taking him to Rome in the
              1540s, where he studied the masterpieces of classical Roman and Greek architecture
              and the work of other influential architects of the time, such as Donato Bramante and
              Raphael.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">D</p>
            <p>
              Burns argues that social mobility was also important. Entrepreneurs, prosperous from
              agriculture in the Veneto, commissioned the promising local architect to design their
              country villas and their urban mansions. In Venice the aristocracy were anxious to co-opt
              talented artists, and Palladio was given the chance to design the buildings that have
              made him famous – the churches of San Giorgio Maggiore and the Redentore, both easy
              to admire because they can be seen from the city's historical centre across a stretch of
              water.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">E</p>
            <p>
              He tried his hand at bridges – his unbuilt version of the Rialto Bridge was decorated with
              the large pediment and columns of a temple – and, after a fire at the Ducal Palace, he
              offered an alternative design which bears an uncanny resemblance to the Banqueting
              House in Whitehall in London. Since it was designed by Inigo Jones, Palladio's first
              foreign disciple, this is not as surprising as it sounds.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">F</p>
            <p>
              Jones, who visited Italy in 1614, bought a trunk full of the master's architectural
              drawings; they passed through the hands of Dukes of Burlington and Devonshire before
              settling at the Royal Institute of British Architects in 1894. Many are now on display at
              Palazzo Barbaran. What they show is how Palladio drew on the buildings of ancient
              Rome as models. The major theme of both his rural and urban building was temple
              architecture, with a strong pointed pediment supported by columns and approached by
              wide steps.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">G</p>
            <p>
              Palladio's work for rich landowners alienates unreconstructed critics on the Italian left,
              but among the papers in the show are designs for cheap housing in Venice. In the wider
              world, Palladio's reputation has been nurtured by a text he wrote and illustrated,
              "Quattro Libri dell' Architettura". His influence spread to St Petersburg and to
              Charlottesville in Virginia, where Thomas Jefferson commissioned a Palladian villa he
              called Monticello.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">H</p>
            <p>
              Vicenza's show contains detailed models of the major buildings and is leavened by
              portraits of Palladio's teachers and clients by Titian, Veronese and Tintoretto; the
              paintings of his Venetian buildings are all by Canaletto, no less. This is an
              uncompromising exhibition; many of the drawings are small and faint, and there are no
              sideshows for children, but the impact of harmonious lines and satisfying proportions is
              to impart in a viewer a feeling of benevolent calm. Palladio is history's most therapeutic
              architect.
            </p>
          </div>

          <div>
            <p className="font-bold mb-1">I</p>
            <p>
              "Palladio, 500 Anni: La Grande Mostra" is at Palazzo Barbaran da Porto, Vicenza, until
              January 6th 2009. The exhibition continues at the Royal Academy of Arts, London, from
              January 31st to April 13th, and travels afterwards to Barcelona and Madrid.
            </p>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 1-7</h3>
        <p className="mb-2">
          Do the following statements agree with the information given in Reading Passage 1?
        </p>
        <p className="mb-4">
          In boxes 1-7 on your answer sheet write<br />
          <strong>TRUE</strong> if the statement agrees with the information<br />
          <strong>FALSE</strong> if the statement contradicts the information<br />
          <strong>NOT GIVEN</strong> if there is no information on this
        </p>
        <div className="space-y-4">
          <div id="question-1" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">1.</span>
              <p>The building where the exhibition is staged has been newly renovated</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[0] || ''}
                onChange={(e) => onAnswerChange(1, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-2" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">2.</span>
              <p>Palazzo Barbaran da Porto typically represents Palladio's design</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[1] || ''}
                onChange={(e) => onAnswerChange(2, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-3" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">3.</span>
              <p>Palladio's father worked as an architect.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[2] || ''}
                onChange={(e) => onAnswerChange(3, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-4" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">4.</span>
              <p>Palladio's family refused to pay for his architectural studies</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[3] || ''}
                onChange={(e) => onAnswerChange(4, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-5" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">5.</span>
              <p>Palladio's alternative design for the Ducal Palace in Venice was based on an English
                building.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[4] || ''}
                onChange={(e) => onAnswerChange(5, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-6" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">6.</span>
              <p>Palladio designed for both wealthy and poor people.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[5] || ''}
                onChange={(e) => onAnswerChange(6, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-7" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">7.</span>
              <p>The exhibition includes paintings of people by famous artists</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[6] || ''}
                onChange={(e) => onAnswerChange(7, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="TRUE">TRUE</option>
                <option value="FALSE">FALSE</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 8-13</h3>
        <p className="mb-2">
          Answer the questions below
        </p>
        <p className="mb-4">
          Choose <strong>NO MORE THAN THREE WORDS</strong> from the passage for each answer.<br />
          Write your answers in boxes 8-13 on your answer sheet
        </p>
        <div className="space-y-4">
          <div id="question-8" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">8.</span>
              <p>What job was Palladio training for before he became an architect?</p>
            </div>
            <div className="mt-3 pl-6">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[7] || ''}
                onChange={(e) => onAnswerChange(8, e.target.value)}
              />
            </div>
          </div>
          <div id="question-9" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">9.</span>
              <p>Who arranged Palladio’s architectural studies?</p>
            </div>
            <div className="mt-3 pl-6">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[8] || ''}
                onChange={(e) => onAnswerChange(9, e.target.value)}
              />
            </div>
          </div>
          <div id="question-10" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">10.</span>
              <p>Who was the first non-Italian architect influenced by Palladio?</p>
            </div>
            <div className="mt-3 pl-6">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[9] || ''}
                onChange={(e) => onAnswerChange(10, e.target.value)}
              />
            </div>
          </div>
          <div id="question-11" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">11.</span>
              <p>What type of Ancient Roman buildings most heavily influenced Palladio’s work?</p>
            </div>
            <div className="mt-3 pl-6">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[10] || ''}
                onChange={(e) => onAnswerChange(11, e.target.value)}
              />
            </div>
          </div>
          <div id="question-12" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">12.</span>
              <p>What did Palladio write that strengthened his reputation?</p>
            </div>
            <div className="mt-3 pl-6">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[11] || ''}
                onChange={(e) => onAnswerChange(12, e.target.value)}
              />
            </div>
          </div>
          <div id="question-13" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">13.</span>
              <p>In the writer’s opinion, what feeling will visitors to the exhibition experience?</p>
            </div>
            <div className="mt-3 pl-6">
              <input
                type="text"
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[12] || ''}
                onChange={(e) => onAnswerChange(13, e.target.value)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPassage1;