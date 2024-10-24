using Microsoft.AspNetCore.Mvc;
using KlassenSysteem.Server.Models;

namespace KlassenSysteem.Server.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class LessonsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;
        public LessonsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        [Route("create-lesson")]
        public IActionResult CreateLesson([FromBody] Lessons lessonModel)
        {
            if (lessonModel == null || string.IsNullOrEmpty(lessonModel.Name) || string.IsNullOrEmpty(lessonModel.Description))
            {
                return BadRequest("Lesson model is invalid.");
            }

            _context.Add(lessonModel);
            _context.SaveChanges();

            return Ok("Lesson created successfully");
        }

        [HttpGet]
        [Route("get-lessons")]
        public IActionResult GetLessons()
        {
            var lessons = _context.Lessons.ToList();
            return Ok(lessons);
        }
    }
}
