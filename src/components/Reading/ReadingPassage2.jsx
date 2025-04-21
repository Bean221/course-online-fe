// src/components/Reading/ReadingPassage2.jsx
import React from 'react';

const ReadingPassage2 = ({ answers, onAnswerChange }) => {
  return (
    <div className="reading-passage">
      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 2</h2>
      <div className="mb-4">
        <p className="text-gray-600 font-semibold">
          You should spend about 20 minutes on Question 14-26 which are based on Reading
          Passage 2 below.
        </p>
      </div>
      <div className="passage-content mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold mb-4">The future never dies?</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-1">A</p>
            <p>
              By ‘glorious’, I mean that our descendants – all who are born on to this Earth – could live
              very comfortably and securely, and could continue to do so for as long as the Earth can
              support life, which should be for a very long time indeed. We should at least be thinking
              in terms of the next million years. Furthermore, our descendants could continue to
              enjoy the company of other species – establishing a much better relationship with them
              than we have now. Other animals need not live in constant fear of us. Many of those
              fellow species now seem bound to become extinct, but a significant proportion could
              and should continue to live alongside us. Such a future may seem ideal, and so it is. Yet I
              do not believe it is fanciful. There is nothing in the physical fabric of the Earth or in our
              own biology to suggest that this is not possible.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">B</p>
            <p>
              ‘Dire’ means that we human beings could be in deep trouble within the next few
              centuries, living but also dying in large numbers in political terror and from starvation,
              while huge numbers of our fellow creatures would simply disappear, leaving only the
              ones that we find convenient – chickens, cattle – or that we can’t shake off, like flies and
              mice. I’m taking it to be self-evident that glory is preferable.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">C</p>
            <p>
              Our future is not entirely in our own hands because the Earth has its own rules, is part
              of the solar system and is neither stable nor innately safe. Other planets in the solar
              system are quite beyond habitation, because their temperature is far too high or too
              low to be endures, and ours, too, in principle could tip either way. Even relatively
              unspectacular changes in the atmosphere could to the trick. The core of the Earth is hot,
              which in many ways is good for living creatures, but every now and again, the molten
              rock bursts through volcanoes on the surface. Among the biggest volcanic eruptions in
              recent memory was Mount St Helens, in the USA, which threw out a cubic kilometer of
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">D</p>
            <p>
              ash – fortunately in an are where very few people live. In 1815, Tambora (in present-day
              Indonesia) expelled so much ash into the upper atmosphere that climatic effects
              seriously harmed food production around the world for season after season. Entire
              civilisations have been destroyed by volcanoes.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">E</p>
            <p>
              Yet nothing we have so far experienced shows what volcanoes can really do.
              Yellowstone National Park in the USA occupies the caldera (the crater formed when a
              volcano collapses) of an exceedingly ancient volcano of extraordinary magnitude.
              Modem surveys show that its centre is now rising. Sometime in the next 200 million
              years, Yellowstone could erupt again, and when it does, the whole world will be
              transformed. Yellowstone could erupt tomorrow. But there’s a very good chance that it
              will give us another million years, and that surely is enough to be going on with. It seems
              sensible to assume that this will be the case.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">F</p>
            <p>
              The universe at large is dangerous, too: in particular, we share the sky with vast
              numbers of asteroids, and every now and again, the come into our planet’s atmosphere.
              An asteroid the size of a small island, hitting the Earth at 15,000 kilometres an hour (a
              relatively modest speed by the standards of heavenly bodies), would strike the ocean
              bed like a rock in a puddle, send a tidal wave around the world as high as a small
              mountain and as fast as a jumbo jet, and propel us into an ice age that could last for
              centuries. There are plans to head off such disasters (including rockets to push
              approaching asteroids into new trajectories), but in truth it’s down to luck.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">G</p>
            <p>
              On the other hand, the archaeological and the fossil evidence shows that no truly
              devastating asteroid has struck since the one that seems to have accounted for the
              extinction of the dinosaurs 65 million years ago. So again, there seems no immediate
              reason for despair. The Earth is indeed an uncertain place, in an uncertain universe, but
              with average luck, it should do us well enough. If the world does become inhospitable in
              the next few thousand or million years, the it will probably be our own fault. In short,
              despite the underlying uncertainty, our own future and that of our fellow creatures is
              very much in our own hands.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">H</p>
            <p>
              Given average luck on the geological and the cosmic scale, the difference between glory
              and disaster will be made, and is being made, by politics. Certain kinds of political
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">I</p>
            <p>
              systems and strategies would predispose us to long-term survival (and indeed to
              comfort and security and pleasure of being alive), while others would take us more and
              more frenetically towards collapse. The broad point is, though, that we need to look at
              ourselves – humanity – and at the world in general in a quite new light. Our material
              problems are fundamentally those of biology. We need to think, and we need our
              politicians to think, biologically. Do that, and take the ideas seriously, and we are in with
              a chance. Ignore biology and we and our fellow creatures haven’t a hope.
            </p>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 14-19</h3>
        <p className="mb-2">
          Do the following statements reflect the claims of the writer in Reading Passage 2?
        </p>
        <p className="mb-4">
          In boxes 14-19 on your answer sheet write<br />
          <strong>YES</strong> if the statement is true<br />
          <strong>NO</strong> if the statement is false<br />
          <strong>NOT GIVEN</strong> if the information is not given in the passage
        </p>
        <div className="space-y-4">
          <div id="question-14" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">14.</span>
              <p>It seems predictable that some species will disappear.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[13] || ''}
                onChange={(e) => onAnswerChange(14, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-15" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">15.</span>
              <p>The nature of the Earth and human biology make it impossible for human beings to
                survive another million years.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[14] || ''}
                onChange={(e) => onAnswerChange(15, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-16" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">16.</span>
              <p>An eruption by Yellowstone is likely to be more destructive than previous volcanic
                eruptions.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[15] || ''}
                onChange={(e) => onAnswerChange(16, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-17" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">17.</span>
              <p>There is a greater chance of the Earth being hit by small asteroids than large ones.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[16] || ''}
                onChange={(e) => onAnswerChange(17, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-18" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">18.</span>
              <p>If the world becomes uninhabitable, it is most likely to be as a result of a natural
                disaster.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[17] || ''}
                onChange={(e) => onAnswerChange(18, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-19" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">19.</span>
              <p>Politicians currently in power seem unlikely to change their way of thinking.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[18] || ''}
                onChange={(e) => onAnswerChange(19, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 20-25</h3>
        <p className="mb-2">
          Complete the summary below.
        </p>
        <p className="mb-4">
          Choose <strong>NO MORE THAN TWO WORDS</strong> from the passage for each answer.<br />
          Write your answers in boxes 20-25 on your answer sheet.
        </p>
        <div className="space-y-4">
          <div id="question-20" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">20.</span>
              <p>The Earth could become uninhabitable, like other planets, through a major change in
                the <input
                  type="text"
                  className="w-1/2 inline-block p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                  value={answers[19] || ''}
                  onChange={(e) => onAnswerChange(20, e.target.value)}
                />
              </p>
            </div>
          </div>
          <div id="question-21" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">21.</span>
              <p>Volcanic eruptions of <input
                  type="text"
                  className="w-1/2 inline-block p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                  value={answers[20] || ''}
                  onChange={(e) => onAnswerChange(21, e.target.value)}
                /> can lead to shortages of</p>
            </div>
          </div>
          <div id="question-22" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">22.</span>
              <p><input
                  type="text"
                  className="w-1/3 inline-block p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                  value={answers[21] || ''}
                  onChange={(e) => onAnswerChange(22, e.target.value)}
                /> in a wide area.</p>
            </div>
          </div>
          <div id="question-23" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">23.</span>
              <p>An asteroid hitting the Earth could create a <input
                  type="text"
                  className="w-1/2 inline-block p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                  value={answers[22] || ''}
                  onChange={(e) => onAnswerChange(23, e.target.value)}
                /> that would result in a</p>
            </div>
          </div>
          <div id="question-24" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">24.</span>
              <p><input
                  type="text"
                  className="w-1/3 inline-block p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                  value={answers[23] || ''}
                  onChange={(e) => onAnswerChange(24, e.target.value)}
                /> Plans are being made to use</p>
            </div>
          </div>
          <div id="question-25" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">25.</span>
              <p><input
                  type="text"
                  className="w-1/3 inline-block p-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ml-2"
                  value={answers[24] || ''}
                  onChange={(e) => onAnswerChange(25, e.target.value)}
                /> to deflect asteroids heading for the Earth.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Question 26</h3>
        <p className="mb-2">
          Choose the correct letter A, B, C or D.
        </p>
        <p className="mb-4">
          Write your answer in box 26 on your answer sheet.
        </p>
        <div id="question-26" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-start">
            <span className="font-bold mr-2">26.</span>
            <p>What is the writer’s purpose in Reading Passage 2?</p>
          </div>
          <div className="mt-3 pl-6">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={answers[25] || ''}
              onChange={(e) => onAnswerChange(26, e.target.value)}
            >
              <option value="">Select Answer</option>
              <option value="A">A to propose a new theory about the causes of natural disasters</option>
              <option value="B">B to prove that generally held beliefs about the future are all mistaken</option>
              <option value="C">C to present a range of opinions currently held by scientists</option>
              <option value="D">D to argue the need for a general change in behavior</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPassage2;