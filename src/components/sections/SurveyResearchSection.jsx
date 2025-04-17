// src/components/sections/SurveyResearchSection.jsx
import HighlightedText from '../../components/sections/HighlightedText';

const SurveyResearchSection = ({ answers, onAnswerChange }) => {
  const handleInputChange = (questionNum, value) => {
    onAnswerChange(questionNum, value);
  };
  
  return (
    <div className="mb-8">
      <div className="mb-4">
        <h3 className="font-bold text-lg">SECTION 4</h3>
        <p className="mb-2">Complete the notes below.</p>
        <p className="mb-4"><HighlightedText>Write ONE WORD ONLY for each answer.</HighlightedText></p>
      </div>
      
      <div className="bg-gray-50 p-6 border border-gray-300 rounded-lg mb-6">
        <h3 className="text-center font-bold text-lg mb-4">A Survey Research</h3>
        
        <div className="mb-6">
          <h4 className="font-bold mb-3">Results of Questionnaire</h4>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              The patients preferred to choose the hospital because of the free <HighlightedText>31</HighlightedText> __________ service provided.
            </li>
            <li>
              Most patients wished the hospital to be <HighlightedText>32</HighlightedText> __________.
            </li>
            <li>
              Patients were concerned about prior <HighlightedText>33</HighlightedText> __________ about the hospital treatment.
            </li>
          </ul>
        </div>
        
        <div className="mb-6">
          <h4 className="font-bold mb-3">Actions in the next year</h4>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              improvements on website for local <HighlightedText>34</HighlightedText> __________ as well as hospital medical staff
            </li>
            <li>
              incentive to motivate the members of staff
            </li>
            <li>
              extra <HighlightedText>35</HighlightedText> __________ for staff's success in work
            </li>
            <li>
              considering the opinions of the <HighlightedText>36</HighlightedText> __________
            </li>
            <li>
              improving the effectiveness of <HighlightedText>37</HighlightedText> __________ between patients, doctors and staff
            </li>
            <li>
              first-come-first-served system
            </li>
          </ul>
        </div>
        
        <div className="mb-4">
          <h4 className="font-bold mb-3">Recommendation</h4>
          <ul className="list-disc pl-5 space-y-3">
            <li>
              A new unit would be built for those who are suffering from <HighlightedText>38</HighlightedText> __________ disturbance.
            </li>
            <li>
              A new ward would be proposed to those in need of <HighlightedText>39</HighlightedText> __________ surgery.
            </li>
            <li>
              The equipment is advanced enough to do with the treatments.
            </li>
            <li>
              More effective <HighlightedText>40</HighlightedText> __________ is needed to improve the efficiency of communication.
            </li>
          </ul>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {[31, 32, 33, 34, 35, 36, 37, 38, 39, 40].map(num => (
          <div key={num} className="mb-4">
            <label className="block mb-1 font-medium">Question {num}</label>
            <input
              type="text"
              value={answers[num - 1] || ''}
              onChange={(e) => handleInputChange(num, e.target.value)}
              className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your answer"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SurveyResearchSection;