using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace PeliculasAPI.DTOs
{
    public class paginationDTO
    {
        public int Page { get; set; } = 1;

        private int PageRecord { get; set; } = 10;

        private readonly int MaximunPageRecords = 50;

        public int PageRecords
        {
            get
            {
                return PageRecord;
            }
            set
            {
                PageRecord = (value > MaximunPageRecords) ? MaximunPageRecords : value;
            }
        }
        
    }
}
