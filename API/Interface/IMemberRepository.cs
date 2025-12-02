using System;
using API.Entities;
using Microsoft.AspNetCore.Mvc;

namespace API.Interface;

public interface IMemberRepository
{
    void Update(Member member);
    Task<bool> SaveAllAsync();
    Task<IReadOnlyList<Member>> GetMembersAsync();
    Task<Member?> GetMemberByIdAsync(string id);
    Task<IReadOnlyList<Photo>>GetPhotosForMemberAsync(string memberId);
    
}
