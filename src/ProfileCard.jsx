import ButtonLink from "./ButtonLink";
import SkillBadge from "./SkillBadge";

function ProfileCard({ profile }) {
  return (
    <article className="profile-card">
      <div className="profile-header">
        <div className="avatar">
          {profile.initials}
        </div>
        <h1>{profile.name}</h1>
        <h2>{profile.role}</h2>
        <p className="location">{profile.location}</p>
      </div>

      <p className="bio">{profile.bio}</p>

      <div className="info-grid">
        <div className="info-item">
          <strong>{profile.experience}</strong>
        </div>
      </div>

      <div className="skills-container">
        {profile.skills.map((skill, index) => (
          <SkillBadge key={index} skill={skill} />
        ))}
      </div>

      <div className="links-container">
        <ButtonLink text="GitHub" href={profile.links.github} variante="primary" />
      </div>
    </article>
  );
}

export default ProfileCard;