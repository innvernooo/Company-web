const mission = [
  'Menyelenggarakan pendidikan anak usia dini yang mengintegrasikan kurikulum nasional dengan nilai-nilai keislaman secara menyeluruh.',
  'Menanamkan akidah yang lurus serta membiasakan ibadah sejak usia dini melalui pembelajaran yang menyenangkan.',
  'Mengembangkan potensi, bakat, dan kreativitas anak melalui kegiatan belajar sambil bermain yang sesuai dengan tahap tumbuh kembangnya.',
  'Membentuk karakter anak yang mandiri, disiplin, percaya diri, dan berakhlak mulia dalam kehidupan sehari-hari.',
  'Menciptakan lingkungan belajar yang aman, nyaman, dan islami dengan dukungan tenaga pendidik yang kompeten dan penuh kasih sayang.',
  'Menjalin kerja sama yang harmonis antara sekolah, orang tua, dan masyarakat dalam mendukung tumbuh kembang anak secara optimal.',
];

export default function SchoolMissions() {
  const mapMission = mission.map((item, index) => (
    <li className='text-black' key={item}>{`${index + 1}. ${item}`}</li>
  ));

  return <ul>{mapMission}</ul>;
}
