import React, { useState } from 'react';

function SportsTeamOrganizer() {
  const [teamName, setTeamName] = useState('');
  const [memberName, setMemberName] = useState('');
  const [members, setMembers] = useState([]);

  const handleAddMember = () => {
    if (memberName.trim() !== '') {
      setMembers([...members, memberName]);
      setMemberName('');
    }
  };

  const handleChangeTeamName = (e) => {
    setTeamName(e.target.value);
  };

  return (
    <div>
      <h1>Sports Team Organizer</h1>

      <div>
        <input
          type="text"
          placeholder="Enter team name"
          value={teamName}
          onChange={handleChangeTeamName}
        />
        <h2>Team: {teamName}</h2>
      </div>

      <div>
        <input
          type="text"
          placeholder="Enter member name"
          value={memberName}
          onChange={(e) => setMemberName(e.target.value)}
        />
        <button onClick={handleAddMember}>Add Member</button>

        <h2>Team Members</h2>
        <ul>
          {members.map((member, index) => (
            <li key={index}>{member}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SportsTeamOrganizer;
