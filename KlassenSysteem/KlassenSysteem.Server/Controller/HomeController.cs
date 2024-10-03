using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace KlassenSysteem.Server.Controller
{
    [ApiController]
    [Route("api/[controller]")]
    public class MyModelsController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public MyModelsController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<MyModel>>> GetMyModels()
        {
            return await _context.MyModels.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<MyModel>> GetMyModel(int id)
        {
            var myModel = await _context.MyModels.FindAsync(id);
            if (myModel == null)
            {
                return NotFound();
            }
            return myModel;
        }

        [HttpPost]
        public async Task<ActionResult<MyModel>> CreateMyModel(MyModel model)
        {
            _context.MyModels.Add(model);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetMyModel), new { id = model.Id }, model);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateMyModel(int id, MyModel model)
        {
            if (id != model.Id)
            {
                return BadRequest();
            }

            _context.Entry(model).State = EntityState.Modified;
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.MyModels.Any(e => e.Id == id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMyModel(int id)
        {
            var model = await _context.MyModels.FindAsync(id);
            if (model == null)
            {
                return NotFound();
            }

            _context.MyModels.Remove(model);
            await _context.SaveChangesAsync();
            return NoContent();
        }
    }
}