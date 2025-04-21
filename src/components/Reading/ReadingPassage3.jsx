// src/components/Reading/ReadingPassage3.jsx
import React from 'react';

const ReadingPassage3 = ({ answers, onAnswerChange }) => {
  return (
    <div className="reading-passage">
      <h2 className="text-xl font-bold mb-4 text-blue-700">SECTION 3</h2>
      <div className="mb-4">
        <p className="text-gray-600 font-semibold">
          You should spend about 20 minutes on Question 27-40 which are based on Reading
          Passage 3 below.
        </p>
      </div>
      <div className="passage-content mb-8 bg-gray-50 p-6 rounded-lg border border-gray-200">
        <h3 className="text-lg font-bold mb-4">Pottery production in ancient Akrotiri</h3>
        <div className="space-y-4">
          <div>
            <p className="font-bold mb-1">A</p>
            <p>
              Excavations at the site of prehistoric Akrotiri, on the coast of the Aegean Sea, have
              revealed much about the technical aspects of pottery manufacture, indisputably one of
              the basic industries of this Greek city. However, considerably less is known about the
              socio-economic context and the way production was organised.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">B</p>
            <p>
              The bulk of pottery found at Akrotiri is locally made, and dates from the late fifteenth
              century BC. It clearly fulfilled a vast range of the settlement’s requirements: more than
              fifty different types of pots can be distinguished. The pottery found includes a wide
              variety of functional types like storage jars, smaller containers, pouring vessels, cooking
              pots, drinking vessels and so on, which all relate to specific activities and which would
              have been made and distributed with those activities in mind. Given the large number
              of shapes produced and the relatively high degree of standardisation, it has generally
              been assumed that most, if not all, of Akrotiri pottery was produced by specialised
              craftsmen in a non-domestic context. Unfortunately neither the potters’ workshops nor
              kilns have been found within the excavated area. The reason may be that the ceramic
              workshops were located on the periphery of the site, which has not yet been excavated.
              In any event, the ubiquity of the pottery, and the consistent repetition of the same
              types in different sizes, suggest production on an industrial scale.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">C</p>
            <p>
              The Akrotirian potters seem to have responded to pressures beyond their households,
              namely to the increasing complexity of regional distribution and exchange systems. We
              can imagine them as full-time craftsmen working permanently in a high production-rate
              craft such as pottery manufacture, and supporting themselves entirely from the
              proceeds of their craft. In view of the above, one can begin to speak in term of mass-
              produced pottery and the existence of organised workshops of craftsmen during the
              period 1550-1500 BC. Yet, how pottery production was organised at Akrotiri remains an
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">D</p>
            <p>
              open question, as there is no real documentary evidence. Our entire knowledge comes
              from the ceramic material itself, and the tentative conclusions which can be drawn from
              it.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">E</p>
            <p>
              The invention of units of quantity and of a numerical system to count them was of
              capital importance of an exchange-geared society such as that of Akrotiri. In spite of the
              absence of any written records, the archaeological evidence reveals that concepts of
              measurements, both of weight and number, had been formulated. Standard measures
              may already have been in operation, such as those evidenced by a graduated series of
              lead weights – made in disc form – found at the site. The existence of units of capacity in
              Late Bronze Age times is also evidenced, by the notation of units of a liquid measure for
              wine on excavated containers.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">F</p>
            <p>
              It must be recognised that the function of pottery vessels plays a very important role in
              determining their characteristics. The intended function affects the choice of clay, the
              production technique, and the shape and the size of the pots. For example, large
              storage jars (pithoi) would be needed to store commodities, whereas smaller containers
              would be used for transport. In fact, the length of a man’s arm limits the size of a
              smaller pot to a capacity of about twenty litres; that is also the maximum a man can
              comfortably carry.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">G</p>
            <p>
              The various sizes of container would thus represent standard quantities of a commodity,
              which is a fundamental element in the function of exchange. Akrotirian merchants
              handling a commodity such as wine would have been able to determine easily the
              amount of wine they were transporting from the number of containers they carried in
              their ships, since the capacity of each container was known to be 14-18 litres. (We could
              draw a parallel here with the current practice in Greece of selling oil in 17 kilogram tins.)
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">H</p>
            <p>
              We may therefore assume that the shape, capacity, and, sometimes decoration of
              vessels are indicative of the commodity contained by them. Since individual transactions
              would normally involve different quantities of a given commodity, a range of
              ‘standardised’ types of vessel would be needed to meet traders’ requirements.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">I</p>
            <p>
              In trying to reconstruct systems of capacity by measuring the volume of excavated
              pottery, a rather generous range of tolerances must be allowed. It seems possible that
              the potters of that time had specific sizes of vessel in mind, and tried to reproduce them
              using a specific type and amount of clay. However, it would be quite difficult for them to
              achieve the exact size required every time, without any mechanical means of regulating
              symmetry and wall thickness, and some potters would be more skilled than others. In
              addition, variations in the repetition of types and size may also occur because of
              unforeseen circumstances during the throwing process. For instance, instead of
              destroying the entire pot if the clay in the rim contained a piece of grit, a potter might
              produce a smaller pot by simply cutting off the rim. Even where there is no noticeable
              external difference between pots meant to contain the same quantity of a commodity,
              differences in their capacity can actually reach one or two litres. In one case the
              deviation from the required size appears to be as much as 10-20 percent.
            </p>
          </div>
          <div>
            <p className="font-bold mb-1">J</p>
            <p>
              The establishment of regular trade routes within the Aegean led to increased movement
              of goods; consequently a regular exchange of local, luxury and surplus goods, including
              metals, would have become feasible as result of the advances in transport technology.
              The increased demand for standardised exchanges, inextricably linked to commercial
              transactions, might have been one of the main factors which led to the standardisation
              of pottery production. Thus, the whole network of ceramic production and exchange
              would have depended on specific regional economic conditions, and would reflect the
              socio-economic structure of prehistoric Akrotiri.
            </p>
          </div>
        </div>
      </div>
      {/* Questions Section */}
      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 27-28</h3>
        <p className="mb-2">
          Choose the correct letter A, B, C or D.
        </p>
        <div className="space-y-4">
          <div id="question-27" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">27.</span>
              <p>What does the writer say about of pottery excavated at Akrotiri?</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[26] || ''}
                onChange={(e) => onAnswerChange(27, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="A">A There was very little duplication.</option>
                <option value="B">B They would have met a big variety of needs.</option>
                <option value="C">C Most of them had been imported from other places.</option>
                <option value="D">D The intended purpose of each piece was unclear.</option>
              </select>
            </div>
          </div>
          <div id="question-28" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">28.</span>
              <p>The assumption that pottery from Akrotiri was produced by specialists is partly
                based on</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[27] || ''}
                onChange={(e) => onAnswerChange(28, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="A">A The discovery of kilns.</option>
                <option value="B">B The central location of workshops.</option>
                <option value="C">C The sophistication of decorative patterns.</option>
                <option value="D">D The wide range of shapes represented.</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 29-32</h3>
        <p className="mb-2">
          Complete each sentence with the correct ending, A-F, below.
        </p>
        <p className="mb-4">
          Write the correct letter, A-F.
        </p>
        <div className="space-y-4">
          <div id="question-29" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">29.</span>
              <p>The assumption that standard units of weight were in use could be bases on</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[28] || ''}
                onChange={(e) => onAnswerChange(29, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
          <div id="question-30" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">30.</span>
              <p>Evidence of the use of standard units of volume is provided by</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[29] || ''}
                onChange={(e) => onAnswerChange(30, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
          <div id="question-31" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">31.</span>
              <p>The size of certain types of containers would have been restricted by</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[30] || ''}
                onChange={(e) => onAnswerChange(31, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
          <div id="question-32" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">32.</span>
              <p>Attempts to identify the intended capacity of containers are complicated by</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[31] || ''}
                onChange={(e) => onAnswerChange(32, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="A">A</option>
                <option value="B">B</option>
                <option value="C">C</option>
                <option value="D">D</option>
                <option value="E">E</option>
                <option value="F">F</option>
              </select>
            </div>
          </div>
          <div className="mt-4 pl-6">
            <p><strong>Endings</strong></p>
            <p><strong>A</strong> The discovery of a collection of metal discs.</p>
            <p><strong>B</strong> The size and type of the sailing ships in use.</p>
            <p><strong>C</strong> Variations in the exact shape and thickness of similar containers.</p>
            <p><strong>D</strong> The physical characteristics of workmen.</p>
            <p><strong>E</strong> Marks found on wine containers.</p>
            <p><strong>F</strong> The variety of commodities for which they would have been used.</p>
          </div>
        </div>
      </div>

      <div className="questions-section mb-8">
        <h3 className="text-lg font-semibold mb-4">Questions 33-38</h3>
        <p className="mb-2">
          Do the following statements agree with the views of the writer in Reading Passage 3?
        </p>
        <p className="mb-4">
          In boxes 33-38 on your answer sheet, write
        </p>
        <p className="mb-4">
          <strong>YES</strong> if the statement agrees with the claims of the writer<br />
          <strong>NO</strong> if the statement contradicts the claims of the writer<br />
          <strong>NOT GIVEN</strong> if it is impossible to say what the writer thinks about this
        </p>
        <div className="space-y-4">
          <div id="question-33" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">33.</span>
              <p>There are plans to excavate new areas of the archaeological site the near future.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[32] || ''}
                onChange={(e) => onAnswerChange(33, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-34" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">34.</span>
              <p>Some of the evidence concerning pottery production in ancient Akrotiri comes from
                written records.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[33] || ''}
                onChange={(e) => onAnswerChange(34, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-35" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">35.</span>
              <p>Pots for transporting liquids would have held no more than about 20 littes.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[34] || ''}
                onChange={(e) => onAnswerChange(35, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-36" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">36.</span>
              <p>It would have been hard for merchants to calculate how much wine was on their
                ships.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[35] || ''}
                onChange={(e) => onAnswerChange(36, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-37" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">37.</span>
              <p>The capacity of containers intended to hold the same amounts differed by up to 20
                percent.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[36] || ''}
                onChange={(e) => onAnswerChange(37, e.target.value)}
              >
                <option value="">Select Answer</option>
                <option value="YES">YES</option>
                <option value="NO">NO</option>
                <option value="NOT GIVEN">NOT GIVEN</option>
              </select>
            </div>
          </div>
          <div id="question-38" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
            <div className="flex items-start">
              <span className="font-bold mr-2">38.</span>
              <p>Regular trading of goods around the Aegean would have led to the general
                standardisation of quantities.</p>
            </div>
            <div className="mt-3 pl-6">
              <select
                className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={answers[37] || ''}
                onChange={(e) => onAnswerChange(38, e.target.value)}
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
        <h3 className="text-lg font-semibold mb-4">Questions 39-40</h3>
        <p className="mb-2">
          Choose the correct letter A, B, C or D.
        </p>
        <p className="mb-4">
          Write your answers in boxes 39-40 on your answer sheet.
        </p>
        <div id="question-39" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-start">
            <span className="font-bold mr-2">39.</span>
            <p>Which of the following does the writer mention as a factor leading to the standardisation
              of pottery production in Akrotiri?</p>
          </div>
          <div className="mt-3 pl-6">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={answers[38] || ''}
              onChange={(e) => onAnswerChange(39, e.target.value)}
            >
              <option value="">Select Answer</option>
              <option value="A">A The discovery of new clay sources.</option>
              <option value="B">B The increase in trade between settlements.</option>
              <option value="C">C A decline in the number of specialist potters.</option>
              <option value="D">D A growth in the population of Akrotiri.</option>
            </select>
          </div>
        </div>
        <div id="question-40" className="question-item p-4 bg-white border border-gray-200 rounded-lg">
          <div className="flex items-start">
            <span className="font-bold mr-2">40.</span>
            <p>According to the writer, what aspect of Akrotiri would have been reflected in its
              pottery production and exchange?</p>
          </div>
          <div className="mt-3 pl-6">
            <select
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={answers[39] || ''}
              onChange={(e) => onAnswerChange(40, e.target.value)}
            >
              <option value="">Select Answer</option>
              <option value="A">A Its democratic form of government.</option>
              <option value="B">B Its artistic achievements.</option>
              <option value="C">C Its economic and social organisation.</option>
              <option value="D">D Its religious beliefs.</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPassage3;